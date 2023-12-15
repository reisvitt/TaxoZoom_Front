/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ClassificationProps } from '../../models/classification'
import { ClassificationHelper } from '../../helpers/classification.helper'
import { CLASSIFICATION_RANK_NAME, CLASSIFICATION_RANK_NAME_LABEL, CLASSIFICTION_LOCAL_DATA } from '../../enums/classifications.enum'
import Button from '../../components/button'
import Container from '../../components/container'
import LOCAL_DATA from './data.json'
import { gameApi } from '../../api/api'
import * as S from './styles'

type TDescription = {
  description: string,
  specific?: string
}

export default function Classifications(): JSX.Element {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') as CLASSIFICATION_RANK_NAME
  const code = searchParams.get('code') || ''


  const [info, setInfo] = useState<TDescription>()
  const [data, setData] = useState<ClassificationProps.Model[]>([])
  const [title, setTitle] = useState<string>('')
  const [hierarchy, setHierarchy] = useState<any[]>([])

  const handleGoBack = (): void => {
    if(hierarchy.length > 0){
      const temp = [...hierarchy]
      temp.pop()
      setHierarchy(temp)
    }
    navigate(-1)
  }


  const getData = async (): Promise<void> => {

    try {
     // getting url, params and keys
      const config = new ClassificationHelper(type, code)
        .generatePath()
        .build()

      // mouting path
      const response = await gameApi.get(`/game/itis/${config.path}`)
      
      // getting data from keys
      const temp1 = response.data[config.responseKey]


      let title = ''

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const temp2 = temp1.map((classification: any) => {
        const rank = classification.rankName as CLASSIFICATION_RANK_NAME
        const rankName = CLASSIFICATION_RANK_NAME_LABEL[rank]

        if(!title){
          title = rankName ?? CLASSIFICATION_RANK_NAME_LABEL[CLASSIFICATION_RANK_NAME.KINGDOM] 
        }
        
        return ({
          tsn: classification.tsn,
          title: classification[config.titleKey],
          rank: rank ?? CLASSIFICATION_RANK_NAME.KINGDOM,
          parentName: classification.parentName,
          rankName: rankName ?? CLASSIFICATION_RANK_NAME_LABEL[CLASSIFICATION_RANK_NAME.KINGDOM]
        })
      })

      setData(temp2)
      setTitle(title)

      if(temp2.length){
        const rank = temp2[0].rank as CLASSIFICATION_RANK_NAME
        const parentName = temp2[0].parentName
        getDescriptions(rank, parentName)
      }

    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    getData()
  }, [type, code])

  console.log("info", info)

  const getDescriptions = (rank: CLASSIFICATION_RANK_NAME, parentName: string): void => {
    const item = LOCAL_DATA.categories.find(item => CLASSIFICTION_LOCAL_DATA[rank] === item.name)

    if(item){
      let specific = ''

      if(item.categories?.length){
        const reino = item.categories.find(temp => temp.name === parentName)
        specific = reino?.description || ''
      }

      setInfo({
        description: item.description,
        specific
      })
    }else{
      setInfo({
        description: '',
      })
    }
  }

  const handleReset = (): void => {
    navigate(`/`)
  }

  const handleSelect = (item: ClassificationProps.Model): void => {
    if(item.tsn === code || item.rankName === 'Species') return

    setHierarchy((prev: any[]) => {
      return [...prev, { title, value: item.title }]
    })
    navigate(`/classificacoes?code=${item.tsn}`)
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <Container>
          <S.Header>
            <S.ResetButton 
              title="Resetar"
              onClick={handleReset}
            />
            <Button
              className='back'
              title="Voltar"
              onClick={handleGoBack}
            />
          </S.Header>
        </Container>
      </S.HeaderContainer>



      <Container>
        <S.Title>{title}</S.Title>

        <S.Body>
          {data.map(item => (
            <S.CardItem onClick={() => handleSelect(item)}>
              {item.title}
            </S.CardItem>
          ))}
        </S.Body>


        <S.Description>
          <p>
            {info?.description}
          </p>

          {!!info?.specific && (
            <>
              <br />
              <h4>Especificidade</h4>
              <p>
                {info?.specific}
              </p>
            </>
          )}
        </S.Description>


      {hierarchy.length > 0 && (
        <S.HierarchyContainer>
          <h3>Hierarquia</h3>
          {hierarchy?.length > 0 && hierarchy?.map(item => (
            <div>
              <h3>{item?.title || ''}: <span>{item?.value || ''}</span></h3>
            </div>
          ))}
        </S.HierarchyContainer>
      )}

      </Container>
    </S.Container>
  )
}
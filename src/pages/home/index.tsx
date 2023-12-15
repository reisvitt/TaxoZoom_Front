import { useNavigate } from 'react-router-dom'
import Button from '../../components/button'
import Container from '../../components/container'
import { CLASSIFICATION_RANK_NAME } from '../../enums/classifications.enum'
import logo from '../../assets/images/logo.png'
import * as S from './styles'

const table = [
  {
    title: 'Reino',
    color: '#c31723',
    description: "O reino é a categoria mais ampla da classificação biológica, agrupando os seres vivos em grandes divisões com base em características fundamentais compartilhadas."
  },
  {
    title: 'Filo',
    color: '#e82269',
    description: 'Filo é uma categoria que agrupa organismos com características mais específicas em comum, como a estrutura corporal e o plano de organização'
  },
  {
    title: 'Classe',
    color: '#592761',
    description: 'Classe é uma categoria que agrupa organismos mais semelhantes em termos de características morfológicas e anatômicas. Ela ajuda a refinar a organização taxonômica das espécies.'
  },
  {
    title: 'Ordem',
    color: '#47a1dc',
    description: 'Ordem é uma categoria que agrupa organismos com características ainda mais específicas em comum, como padrões de anatomia e comportamento. Ela contribui para a classificação mais detalhada das espécies.'
  },
  {
    title: 'Família',
    color: '#44b59c',
    description: 'Família é uma categoria que agrupa organismos que compartilham características ainda mais específicas, muitas vezes com parentesco mais próximo, em comum. Ela contribui para a organização mais refinada das espécies.'
  },
  {
    title: 'Gênero',
    color: '#f0836a',
    description: 'Gênero é uma categoria que agrupa organismos que compartilham características semelhantes mais específicas, frequentemente com parentesco próximo. Ele ajuda a identificar espécies relacionadas de forma mais precisa.'
  },
  {
    title: 'Espécie',
    color: '#facf5e',
    description: 'Espécie é a categoria mais específica da classificação biológica e refere-se a um grupo de organismos que podem cruzar entre si e produzir descendentes férteis. Cada espécie possui características únicas que a distinguem das outras.'
  },
]

export default function HomePage(): JSX.Element {
  const navigate = useNavigate()

  const handleStart = (): void => {
    navigate(`/classificacoes?type=${CLASSIFICATION_RANK_NAME.KINGDOM}`)
  }

  const handleQuiz = (): void => {
    navigate(`/quiz`)
  }


  return(
    <S.Container>
      <S.HeaderContainer>
        <Container>
          <S.Header>
            <span>
              <img src={logo} alt="TaxoZoom" />
              <h3>TaxoZoom</h3>
            </span>
            
            <div>
              <Button 
                title="TaxoZoom Quiz"
                onClick={handleQuiz}
              />
              <Button 
                title="Hierarquia"
                onClick={handleStart}
              />
            </div>
          </S.Header>
        </Container>
      </S.HeaderContainer>

      <Container>
        <S.Title>Taxonomia</S.Title>


        <h2>Introdução</h2>

        <p>
          A vida na Terra é vasta e diversificada, repleta de uma miríade de formas e funções. Compreender essa diversidade biológica é fundamental para desvendar os mistérios da evolução e da interconexão entre os diferentes seres vivos. A taxonomia, como ciência fundamental da biologia, desempenha um papel crucial nesse processo.
        </p>

        <p>
          A palavra "taxonomia" tem suas raízes no grego antigo, onde "táxis" significa "ordem" ou "arranjo", e "nomia" se refere a "lei" ou "ciência". Assim, a taxonomia é, essencialmente, a ciência da classificação e nomeação dos seres vivos, proporcionando uma estrutura ordenada para a compreensão da incrível diversidade da vida em nosso planeta.
        </p>

        <p>
          Ao longo da história, os cientistas desenvolveram métodos e princípios para agrupar organismos com base em suas semelhanças e relações evolutivas. Desde as primeiras tentativas de classificação por Lineu até as modernas técnicas moleculares, a taxonomia evoluiu, proporcionando não apenas uma maneira de organizar a informação biológica, mas também uma ferramenta essencial para estudos e pesquisas em biologia evolutiva, ecologia, conservação e outras disciplinas.
        </p>

        <p>
          Nesta exploração da taxonomia, mergulharemos nas intricadas teias da classificação biológica, descobrindo como essa ciência nos ajuda a decifrar os padrões de parentesco entre os seres vivos e a compreender a riqueza da vida que nos cerca.
        </p>

        <br />
        <h2>Nomeclatura</h2>

        <p>
          A Nomenclatura Binomial é um sistema de nomeação de espécies proposto por Carl Linnaeus no século XVIII, que ainda é amplamente utilizado hoje em dia. Esse sistema fornece uma maneira uniforme e internacionalmente reconhecida de atribuir nomes científicos às diferentes espécies, garantindo que os cientistas possam se comunicar de maneira eficaz e sem ambiguidades sobre os organismos que estão estudando.
        </p>

        <p>
          <p>
            A Nomenclatura Binomial segue duas regras principais:
          </p>

          <ol>
            <li>
              <b>Nomes Binomiais:</b>

              <ul>
                <li>
                  Cada espécie é identificada por dois nomes, um gênero e um epíteto específico (ou espécie). Por exemplo, Homo sapiens (humanos) e Canis lupus (lobos).
                </li>
                <li>
                  O primeiro nome, em maiúscula, representa o gênero, enquanto o segundo, em minúscula, denota a espécie. Ambos são escritos em itálico ou sublinhado para indicar seu status científico.
                </li>
              </ul>
            </li>

            <br />
            <li>
              <b>Universalidade e Estabilidade:</b>
              <ul>
                <li>
                  A nomenclatura binomial é internacionalmente aceita, o que significa que o mesmo nome é usado em todo o mundo para se referir à mesma espécie.
                </li>
                <li>
                  Os nomes são escolhidos para serem estáveis ao longo do tempo, minimizando alterações e garantindo consistência.
                </li>
              </ul>
            </li>
          </ol>

          <p>
            <b>Exemplo Prático:</b>

            <ul>
              <li>
                Panthera leo: Refere-se aos leões. "Panthera" é o gênero, e "leo" é a espécie.
              </li>
              <li>
                Quercus robur: Refere-se aos carvalhos. "Quercus" é o gênero, e "robur" é a espécie.
              </li>
            </ul>
          </p>

          <p>
            A Nomenclatura Binomial é uma ferramenta essencial na taxonomia, contribuindo para a organização sistemática da diversidade biológica e proporcionando uma base sólida para a compreensão e comunicação no campo da biologia.
          </p>
        </p>

        <br />
        <h2>
          Categorias Taxonômicas
        </h2>

        <p>
          As categorias taxonômicas, ou unidades taxonômicas, são os diferentes níveis hierárquicos usados na classificação dos seres vivos pela taxonomia. Elas refletem a organização e a diversidade da vida, permitindo que os cientistas agrupem os organismos com base em características compartilhadas e relações evolutivas. As principais categorias taxonômicas, em ordem hierárquica, são:
        </p>
       
      
        <S.Table>
          <S.ContainerClassifications>
            {table.map((item, index) => (
              <S.Classification 
                key={item.title}
                width={100 - 7*index}
                color={item.color}
                title={item.description}
              >
                <S.ClassificationTitle>
                  {item.title}
                </S.ClassificationTitle>
              </S.Classification>
            ))}
          </S.ContainerClassifications>
        </S.Table>

        <p>
          Essas categorias formam uma hierarquia na qual grupos mais amplos (como domínio e reino) englobam grupos mais específicos (como classe, ordem, família, etc.). A classificação taxonômica fornece uma estrutura organizada que facilita a comunicação e o estudo da diversidade biológica.
        </p>

        <img src="https://cursoenemgratuito.com.br/app/uploads/2019/06/esp%C3%A9cie-de-urso.jpg" alt="" />

        <br />
        <h2>Sobre o Domínio</h2>
        <p>
          Alguns organismos vivos apresentam características muito marcantes que permitem classificá-los em grupos bem definidos. Outros, no entanto, apresentam algumas peculiaridades que tornam uma classificação exata impossível. Diante dessa problemática, é constante a busca por maneiras mais fieis de classificação.

          Em 1977, Carl Woese propôs um modelo baseado em aspectos evolutivos a partir da comparação de sequências de rRNA. A partir desses estudos, ficou claro que os eucariontes apresentam muitas relações entre si e que os procariontes poderiam ser organizados em dois grupos. Os seres vivos passaram, então, a ser classificados em três subdivisões principais, denominadas de <b>domínios</b>, uma categoria acima de Reino. Os três domínios existentes são: <b>Archaea</b>, <b>Bacteria</b> e <b>Eukarya</b>.
        </p>

        <i>Veja mais sobre "Três domínios" em: <a
          target='_blank'
          href="https://brasilescola.uol.com.br/biologia/tres-dominios.htm">https://brasilescola.uol.com.br/biologia/tres-dominios.htm</a></i>


        <br />
        <br />
        <br />
        <img 
          src="https://cdn.kastatic.org/ka-perseus-images/2aa9fe110f52b74854ce8219d21e8d5eb98d712c.png"
        />
        <i>https://pt.khanacademy.org/science/biology/bacteria-archaea/prokaryote-metabolism-ecology/a/prokaryote-classification-and-diversity</i>
        <br />
        <br />
        <br />

        <h4>Navegue na Hierarquia</h4>
        <p>
          Explore a hierarquia taxonômica de forma prática na nossa aplicação! Navegue pelas categorias que organizam a diversidade da vida. Clique no botão abaixo para começar sua jornada pela taxonomia!
        </p>

        <Button
          className='navigation'
          title="Iniciar"
          onClick={handleStart}
        />

        <br />
        <br />


        <h4>TaxoZoom Quiz</h4>
        <p>
          Desafie-se agora! Teste seus conhecimentos em taxonomia com o nosso TaxoZoom Quiz. Clique no botão abaixo para começar e explore a diversidade da vida de uma maneira divertida e educativa!
        </p>
        

        <Button
          className='quiz'
          title="TaxoZoom Quiz"
          onClick={handleQuiz}
        />

      </Container>

    </S.Container>
  )
}
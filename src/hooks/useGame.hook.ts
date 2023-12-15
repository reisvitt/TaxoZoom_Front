import { GameContext, IContextProps } from '../contexts/game.context'
import { useContext } from 'react'

export const useGame = (): IContextProps => {
  const context = useContext(GameContext)

  if (!context) {
    throw new Error('useGame must be used within a provider GameProvider')
  }
  return { ...context }
}

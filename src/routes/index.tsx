import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/home'
import Classifications from '../pages/classifications';

import DefaultLayout from '../components/layouts/default';
import QuizLayout from '../components/layouts/quiz';

import Loading from '../components/loading';

import { StartQuiz } from '../pages/quiz/start-quiz';
import { GameQuiz } from '../pages/quiz/game-quiz';
import { FinishQuiz } from '../pages/quiz/finish-quiz';


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'classificacoes',
        element: <Classifications />,
      },
    ],
  },
  {
    path: "/quiz",
    element: <QuizLayout />,
    children: [
      {
        index: true,
        element: <StartQuiz />,
      },
      {
        path: 'game',
        element: <GameQuiz />,
      },
      {
        path: 'finish',
        element: <FinishQuiz />,
      },
    ],
  },
]);

export default function RoutesComponent(): JSX.Element{

  return (
    <RouterProvider 
      router={router} 
      fallbackElement={<Loading />} 
    />
  )
  
}
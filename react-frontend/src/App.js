import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import { TeamPage } from './pages/TeamPage';
import RootComponent from './components/RootComponent';
import { MatchPage } from './pages/MatchPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComponent />,
    children: [
      { path: '/teams/:teamName', element: <TeamPage /> },
      { path: '/teams/:teamName/matches/:year', element: <MatchPage /> }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

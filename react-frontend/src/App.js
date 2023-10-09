import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import { TeamPage } from './pages/TeamPage';
import RootComponent from './components/RootComponent';
import { MatchPage } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComponent />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/teams/:teamName', element: <TeamPage /> },
      { path: '/teams/:teamName/matches/:year', element: <MatchPage /> },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

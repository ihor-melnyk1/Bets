import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import NotFound from './components/NotFound';
import Leagues from './components/Leagues';
import Matches from './components/Matches';
import About from './components/About';
import Support from './components/Support';
import Favorites from './components/Favorites';

import store from './store';  

import './index.css'
import { getDate } from './functions';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Matches request={`https://v3.football.api-sports.io/fixtures?date=${getDate()}&timezone=Europe/Kiev`}/>,
      },
      {
        path: "/live",
        element: <Matches request={`https://v3.football.api-sports.io/fixtures?live=all&timezone=Europe/Kiev`}/>,
      },
      {
        path: "/leagues",
        element: <Leagues />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ]
  },
]);

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  , document.getElementById('root'));


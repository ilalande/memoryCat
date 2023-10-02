import ErrorPage from '@pages/ErrorPage';
import Home from '@pages/Home';
import AccessibilityPage from 'src/pages/AccessiblityPage';
import Game from 'src/pages/Game';
import LegalPage from 'src/pages/LegalPage';
import imgSettings from '@assets/images/settings.svg';
import imgCat from '@assets/images/cat.png';
import imgPlay from '@assets/images/play.svg';
import Settings from 'src/pages/Settings';
import { routesType } from '@custom-types/routes';
import SiteMapPage from 'src/pages/SiteMapPage';
export const routes: routesType[] = [
  {
    path: '',
    element: <Home />,
    errorElement: <ErrorPage />,
    name: 'home',
    title: 'Memory Cat - Accueil',
    id: 'ROUTE001',
  },
  {
    path: 'settings',
    element: <Settings />,
    name: 'settings',
    catNav: 'header',
    title: 'réglages',
    img: imgSettings,
    id: 'ROUTE002',
  },
  {
    path: 'game',
    element: <Game />,
    name: 'game',
    text: 'Play',
    img: imgPlay,
    catNav: 'header',
    title: 'Jouer à Memory Cat - play',
    id: 'ROUTE003',
  },

  // {
  //   path: 'game',
  //   element: <Game />,
  //   name: 'home',
  //   catNav: 'header',
  //   title: 'Recommencer',
  //   img: imgRewind,
  //   id: 'ROUTE004',
  // },
  {
    name: 'memoryCatHome',
    text: 'Memory Cat',
    path: '',
    catNav: 'footer',
    img: imgCat,
    id: 'ROUTE005',
  },
  {
    name: 'legal',
    text: 'Mentions légales',
    path: 'mentions-legales',
    element: <LegalPage />,
    catNav: 'footer',
    id: 'ROUTE006',
  },

  {
    name: 'acessibility',
    text: 'Accessibilité : partiellement conforme',
    path: 'accessibilite',
    element: <AccessibilityPage />,
    catNav: 'footer',
    id: 'ROUTE007',
  },
  {
    name: 'siteMap',
    text: 'Plan du site',
    path: 'plan',
    element: <SiteMapPage />,
    catNav: 'footer',
    id: 'ROUTE007',
  },
];

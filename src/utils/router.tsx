import ErrorPage from '@pages/ErrorPage';
import Home from '@pages/Home';
import AccessibilityPage from 'src/pages/AccessiblityPage';
import Game from 'src/pages/Game';
import LegalPage from 'src/pages/LegalPage';
import imgSettings from '@assets/images/settings.svg';
import imgRewind from '@assets/images/rotate-cw.svg';
import imgCat from '@assets/images/cat.png';
import imgPlay from '@assets/images/play.svg';
import Settings from 'src/pages/Settings';
import { routesType } from '@custom-types/routes';
export const routes: routesType[] = [
  {
    path: 'settings',
    element: <Settings />,
    name: 'settings',

    catNav: 'header',
    title: 'réglages',
    img: imgSettings,
  },
  {
    path: 'game',
    element: <Game />,
    name: 'game',
    text: 'Play',
    img: imgPlay,
    catNav: 'header',
    title: 'Jouer à Memory Cat - play',
  },

  {
    path: '',
    element: <Home />,
    errorElement: <ErrorPage />,
    name: 'home',

    catNav: 'header',
    title: 'Memory Cat - Accueil',
    img: imgRewind,
  },
  {
    name: 'memoryCatHome',
    text: 'Memory Cat',
    path: '',
    catNav: 'footer',
    img: imgCat,
  },
  {
    name: 'legal',
    text: 'Mentions légales',
    path: 'mentions-legales',
    element: <LegalPage />,
    catNav: 'footer',
  },

  {
    name: 'acessibility',
    text: 'Accessibilité : partiellement conforme',
    path: 'accessibilite',
    element: <AccessibilityPage />,
    catNav: 'footer',
  },
];

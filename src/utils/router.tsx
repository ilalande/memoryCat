import ErrorPage from '@pages/ErrorPage';
import Home from '@pages/Home';
import AccessibilityPage from 'src/pages/AccessiblityPage';
import Game from 'src/pages/Game';
import LegalPage from 'src/pages/LegalPage';
import imgSettings from '@assets/images/settings.svg';
import imgRewind from '@assets/images/rotate-cw.svg';
import Settings from 'src/pages/Settings';

export const routes = [
  {
    path: '',
    element: <Home />,
    errorElement: <ErrorPage />,
    name: 'home',
    text: 'Accueil',
    catNav: 'header',
    title: 'Memory Cat - Accueil',
    img: imgRewind,
  },
  {
    path: 'game',
    element: <Game />,
    name: 'game',
    text: 'Jouer',
    catNav: 'header',
    title: 'Memory Cat - jouer',
  },
  {
    path: 'settings',
    element: <Settings />,
    name: 'settings',
    text: 'Réglages',
    catNav: 'header',
    title: 'réglages',
    img: imgSettings,
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

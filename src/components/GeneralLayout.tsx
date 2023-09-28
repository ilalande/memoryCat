import { FC, PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';
// Style in App.css
const GeneralLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <div className='mainWrapper'>
      <nav role='navigation' aria-label='Accès rapide'>
        <a href='#main' className='sr-only'>
          Contenu principal
        </a>
      </nav>
      <Header />
      <main role='main' id='main' className='section'>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default GeneralLayout;

import styles from '@styles/modules/Home.module.css';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';

function Game() {
  return (
    <div className={styles.home}>
      <h1 className='sr-only'>Memory Cat</h1>

      <Gallery />
    </div>
  );
}

export default Game;

import styles from '@styles/modules/Pages.module.css';
import cat from '@assets/images/cat.png';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeWrapper}>
        <h1>Bienvenue sur Mémory Cat</h1>
        <div className={styles.image}>
          <img src={cat} />
        </div>
        <div className={styles.playButton}>
          <a href='/game'>Play</a>
        </div>
      </div>
    </div>
  );
}

export default Home;

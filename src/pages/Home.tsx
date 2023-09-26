import styles from '@styles/modules/Home.module.css';
import cat from '@assets/images/cat.png';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.image}>
        <img src={cat} />
      </div>
      <div className={styles.playButton}>
        <a href='/game'>Play</a>
      </div>
    </div>
  );
}

export default Home;

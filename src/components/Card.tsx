import styles from '../styles/modules/card.module.css';
import { cardType } from '@custom-types/content-types';

interface cardPropsType {
  card: cardType | null;
}
export default function Card({ card }: cardPropsType): JSX.Element {
  return (
    <div className={styles.card}>
      {card ? (
        <div className={styles.cardImage}>
          <img src={card.url} width={card.width} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

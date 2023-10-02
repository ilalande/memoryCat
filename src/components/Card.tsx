import styles from '../styles/modules/card.module.css';

import { cardType } from '@custom-types/content-types';

interface cardPropsType {
  card: cardType | null;
  index: number;
  imageVisible: boolean;
  imageInactive: boolean;
  handleClick: (index: number) => void;
}
export default function Card({
  card,
  index,
  imageVisible,
  imageInactive,
  handleClick,
}: cardPropsType): JSX.Element {
  return (
    <div className={styles.card}>
      {(card && imageInactive) || (card && imageVisible) ? (
        <div className={styles.cardImage}>
          <img src={card.url} width={card.width} title={card.title} />
        </div>
      ) : card ? (
        <button className={styles.cardImage} onClick={() => handleClick(index)}>
          <span></span>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

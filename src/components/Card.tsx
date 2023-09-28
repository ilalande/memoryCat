import styles from '../styles/modules/card.module.css';
import { useEffect } from 'react';

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
  // useEffect(() => {
  //   console.log(card);
  //   console.log(index);
  //   console.log(imageVisible);
  // }, [imageVisible]);

  return (
    <div className={styles.card}>
      {(card && imageInactive) || (card && imageVisible) ? (
        <div className={styles.cardImage}>
          <img src={card.url} width={card.width} />
        </div>
      ) : card ? (
        <button className={styles.cardImage} onClick={() => handleClick(index)}>
          <span></span> <p> {card.title}</p>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

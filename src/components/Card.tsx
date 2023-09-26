import { useEffect } from 'react';

import styles from '../styles/modules/card.module.css';
import { cardType } from '@custom-types/content-types';

interface cardPropsType {
  card: cardType | null;
}
export default function Card({ card }: cardPropsType): JSX.Element {
  useEffect(() => {
    console.log(card);
  }, []);
  return (
    <>
      {card ? (
        <div className={styles.card}>
          <img src={card.url} width={card.width} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

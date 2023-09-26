import { useEffect } from 'react';
import styles from '../styles/modules/gallery.module.css';
import Card from './Card';
import { cardType } from '@custom-types/content-types';

export default function Gallery({
  cardArr,
}: {
  cardArr: cardType[] | null;
}): JSX.Element {
  useEffect(() => {
    console.log(cardArr);
  }, []);
  return (
    <>
      {cardArr ? (
        <div className={styles.gallery}>
          {cardArr.map((card) => {
            return (
              <div key={card.id}>
                <Card card={card} />
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

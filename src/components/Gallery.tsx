import styles from '../styles/modules/gallery.module.css';
import Card from './Card';
import { cardType } from '@custom-types/content-types';

interface galleryPropsType {
  cardArr: cardType[] | null;
  openedCards: number[];
  clearedCards: number[];
  handleClick: (index: number) => void;
}

export default function Gallery({
  cardArr,
  openedCards,
  clearedCards,
  handleClick,
}: galleryPropsType): JSX.Element {
  const checkIfImageVisible = (index: number) => {
    if (clearedCards.includes(index) || openedCards.includes(index))
      return true;
    else return false;
  };

  const checkIfImageInactive = (index: number) => {
    if (clearedCards.includes(index)) return true;
    else return false;
  };
  return (
    <>
      {cardArr ? (
        <div className={styles.gallery}>
          {cardArr.map((card, index) => {
            return (
              <Card
                key={card.id}
                card={card}
                index={index}
                imageVisible={checkIfImageVisible(index)}
                handleClick={handleClick}
                imageInactive={checkIfImageInactive(index)}
              />
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

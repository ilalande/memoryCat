import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import styles from '@styles/modules/Home.module.css';
import { fetchApi } from 'src/utils/request';
import { shuffleCards } from 'src/utils/functions';
import Gallery from '../components/Gallery';
import { cardType } from '@custom-types/content-types';

function Game() {
  const [cardArr, setCardArr] = useState<cardType[] | null>([]);
  const [openedCards, setOpenedCards] = useState<number[]>([]);
  const [clearedCards, setClearedCards] = useState<number[]>([]);

  const getCatArray = async () => {
    const data = await fetchApi();

    if (data) {
      const catArray: cardType[] = [];
      const l = data.length;
      for (let j = 0; j < 2; j++) {
        for (let i = 0; i < l; i++) {
          const { url, heigth, width } = data[i];
          catArray.push({
            id: nanoid(),
            url: url,
            heigth: heigth,
            width: width,
            title: `Cat ${i}`,
          });
        }
      }
      setCardArr(shuffleCards(catArray));
    }
  };

  useEffect(() => {
    console.log('opened cards ' + openedCards);
  }, [openedCards]);
  useEffect(() => {
    console.log('cleard cards ' + clearedCards);
  }, [clearedCards]);
  const handleClick = (index: number) => {
    if (openedCards.length === 0) {
      setOpenedCards([index]);
    } else if (openedCards.length === 1) {
      const firstIndex = openedCards[0];
      setOpenedCards([...openedCards, index]);
      setTimeout(() => {
        if (cardArr && cardArr[firstIndex].title === cardArr[index].title)
          setClearedCards([...clearedCards, firstIndex, index]);
        setOpenedCards([]);
      }, 2000);
    }
  };

  useEffect(() => {
    try {
      getCatArray();
    } catch (error) {
      console.error;
    }
  }, []);

  useEffect(() => {
    console.log(cardArr);
  }, [cardArr]);

  return (
    <div className={styles.home}>
      <h1 className='sr-only'>Memory Cat</h1>

      <Gallery
        cardArr={cardArr}
        openedCards={openedCards}
        clearedCards={clearedCards}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Game;

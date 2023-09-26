import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import styles from '@styles/modules/Home.module.css';
import { fetchApi } from 'src/utils/request';
import { shuffleCards } from 'src/utils/functions';
import Gallery from '../components/Gallery';
import { cardType } from '@custom-types/content-types';

function Game() {
  const [cardArr, setCardArr] = useState<cardType[] | null>([]);

  const getCatArray = async () => {
    const data = await fetchApi();

    if (data) {
      const catArray: cardType[] = [...data];
      for (const item of data) {
        catArray.push({
          id: nanoid(),
          url: item.url,
          heigth: item.heigth,
          width: item.width,
        });
      }
      for (const item of data) {
        catArray.push({
          id: nanoid(),
          url: item.url,
          heigth: item.heigth,
          width: item.width,
        });
      }

      setCardArr(shuffleCards(catArray));
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

      <Gallery cardArr={cardArr} />
    </div>
  );
}

export default Game;

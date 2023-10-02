import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import styles from '@styles/modules/Pages.module.css';
import { fetchApi } from 'src/utils/request';
import { shuffleCards } from 'src/utils/functions';
import Gallery from '@components/Gallery';
import Modal from 'src/components/Modal';
import { cardType } from '@custom-types/content-types';

function Game() {
  const [cardArr, setCardArr] = useState<cardType[] | null>([]);
  const [openedCards, setOpenedCards] = useState<number[]>([]);
  const [clearedCards, setClearedCards] = useState<number[]>([]);
  const [count, setCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    console.log('modal visible :' + isModalVisible);
    console.log('clearedCards :' + clearedCards);

    if (count > 0 && clearedCards.length === cardArr?.length) {
      console.log('yes modal visible ' + isModalVisible);
      setIsModalVisible(true);
    }
  }, [clearedCards]);

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

  const handleClick = (index: number) => {
    if (openedCards.length === 0) {
      setOpenedCards([index]);
    } else if (openedCards.length === 1) {
      setCount((prev) => {
        return prev + 1;
      });
      const firstIndex = openedCards[0];
      setOpenedCards([...openedCards, index]);
      if (
        cardArr &&
        cardArr[firstIndex].title !== cardArr[index].title &&
        firstIndex !== index
      ) {
        setTimeout(() => {
          setOpenedCards([]);
        }, 2000);
      } else if (
        cardArr &&
        cardArr[firstIndex].title === cardArr[index].title &&
        firstIndex !== index
      ) {
        setClearedCards([...clearedCards, firstIndex, index]);
        setOpenedCards([]);
      }
    }
  };

  useEffect(() => {
    try {
      getCatArray();
    } catch (error) {
      console.error;
    }
  }, []);

  // useEffect(() => {
  //   console.log(cardArr);
  // }, [cardArr]);

  return (
    <div className={styles.home}>
      <h1 className='sr-only'>Memory Cat</h1>
      <div className={styles.counts}>{count}</div>
      <Gallery
        cardArr={cardArr}
        openedCards={openedCards}
        clearedCards={clearedCards}
        handleClick={handleClick}
      />
      {isModalVisible && (
        <Modal onModalClose={() => setIsModalVisible(false)}>
          <p>Bravo ! vous avez gagné en {count} coups</p>
        </Modal>
      )}
    </div>
  );
}

export default Game;

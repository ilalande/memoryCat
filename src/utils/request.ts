import axios from 'axios';
import { AxiosResponse } from 'axios';
import { cardApiType } from '@custom-types/content-types';

export const fetchApi = async (): Promise<cardApiType[] | null> => {
  const res: AxiosResponse = await axios.get(
    'https://api.thecatapi.com/v1/images/search?limit=6&breed_ids=beng&api_key=live_96btM7BsAgGmGnmp7MMmwS6IDp7l4Us36yvmwAV2WomQGhO2SiJntqe6RNelYjh7'
  );
  const dataFromAPi: cardApiType[] | null = res.data;
  return dataFromAPi;
};

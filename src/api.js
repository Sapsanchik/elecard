import { API_URL } from './config';

const getId = async () => {
  const response = await fetch(API_URL + 'catalog.json');
  return await response.json();
};


export { getId };

import axios from 'axios';
const fetcher_get = (url) => axios.get(url).then((res) => res.data);
const fetcher_async = async (url) => {
  const data = await axios.get(url);
  return data.data;
};
export { fetcher_get, fetcher_async };

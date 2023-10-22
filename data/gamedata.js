import axios from "axios";
export const fetchAsyncGames = async (page = 1) => {
    const URL_API = `https://api.rawg.io/api/games?key=2014ca8f1ab34906952da5f330744b55&page=${page}`;
    const { data } = await axios.get(URL_API);
    return data;
  };
  
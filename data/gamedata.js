import axios from "axios";
export const fetchAsyncGames = async (page = 1) => {
    const URL_API = `https://api.rawg.io/api/games?key=219af9c69fd8413cb6d8e15b6471d74a&page=${page}`;
    const { data } = await axios.get(URL_API);
    return data;
  };
  
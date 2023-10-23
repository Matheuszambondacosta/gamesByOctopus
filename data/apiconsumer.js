import axios from 'axios';

export const fetchApi = async (page) => {
    const URL_API = `https://api.rawg.io/api/games?key=219af9c69fd8413cb6d8e15b6471d74a&page=${page}`;

    try {
        const resposta = await axios.get(URL_API);
        return resposta.data.results;
    }

    catch (error) {
        throw error;
    }
}

export const fetchApiDetails = async (id) => {
    try {
        const resposta = await axios.get(`https://api.rawg.io/api/games/${id}?key=219af9c69fd8413cb6d8e15b6471d74a`);
        return resposta.data;
    }

    catch (error) {
        throw error;
    }

}
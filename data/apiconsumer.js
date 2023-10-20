import axios from 'axios';
const URL_API = 'https://api.rawg.io/api/games?key=2014ca8f1ab34906952da5f330744b55'


export const fetchApi = async () => {

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
        const resposta = await axios.get(`https://api.rawg.io/api/games/${id}?key=2014ca8f1ab34906952da5f330744b55`);
        return resposta.data;
    }

    catch (error) {
        throw error;
    }

}
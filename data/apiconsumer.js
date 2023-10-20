import axios from 'axios';
const URL_API = 'https://api.rawg.io/api/games?key=2014ca8f1ab34906952da5f330744b55&dates=2023-01-01,2023-10-19&ordering=-added';


const fetchApi = async () => {

    try {
        const resposta = await axios.get(URL_API);
        return resposta.data.results;
    }

    catch (error) {
        throw error;
    }
}

export default fetchApi;
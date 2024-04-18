import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'af0d5f243de6f7a5bfa482911cb42a9e';

export const getTrends = async ({ abortController }) => {
    const response = await axios.get('/trending/movie/day?api_key=' + API_KEY,  { 
        signal: abortController.signal,
    });
    return response.data.results;
};



// export async function getTrends() {
//     const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
//     return response.data.results;
// }
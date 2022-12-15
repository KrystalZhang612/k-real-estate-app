import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'
export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'YOUR OWN BAYUT API',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    }); 
    return data; 
}; 

import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'
export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '9f92388fbamsh2e008548e615b32p1c410ajsne12c35239c3e',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    }); 
    return data; 
}
const API_KEY = '3d6ff10029094aeca3e9ad2867756893';
const BASE_URL = 'https://newsapi.org/v2';

export const getNews = searchText => {
    return fetch(`${BASE_URL}/everything?q=${searchText}`, {
        headers : {
            'X-Api-Key': API_KEY,
        }
    })
}
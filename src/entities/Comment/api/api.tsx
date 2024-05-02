import axios from "axios"
const API_BASE_URL = 'https://hacker-news.firebaseio.com/v0';

// // Функция для получения 100 последних новостей
// export const getComments = async () => {
//     try {
//         const response = await axios.get(`${API_BASE_URL}/newstories.json`);
//         const latestNewsIds = response.data.slice(0, 100);
//         return latestNewsIds;
//     } catch (error) {
//         console.error('Ошибка при получении 100 последних новостей:', error);
//         return [];
//     }
// };

// Функция для получения данных о конкретной новости по ее идентификатору
export const getCommentById = async (newsId:number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/item/${newsId}.json`);
        return response.data;
    } catch (error) {
        console.error(`Ошибка при получении данных о новости с ID ${newsId}:`, error);
        return null;
    }
};

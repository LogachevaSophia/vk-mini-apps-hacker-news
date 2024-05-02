import axios from "axios";
import { post } from "../../PostList/models/post";
const API_BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export const getPost = async (id: number): Promise<post> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/item/${id}.json?print=pretty`);
        return JSON.parse(JSON.stringify(response.data));
    } catch (error) {   
        console.error(`Ошибка при получении данных по посту ${id}`, error);
        return {};
    }
}



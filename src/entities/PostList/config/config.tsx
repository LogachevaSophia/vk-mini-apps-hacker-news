
import { getLatestNews, getNewsById } from "../api/api.tsx";
import { post } from "../models/post.tsx";

class ConfigPostList{
    getFullNewsList = async (): Promise<post[]> => {
        try {
            const latestNewsIds = await getLatestNews();
            const newsDetails = await Promise.all(latestNewsIds.map(newsId => getNewsById(newsId)));
            return newsDetails.filter(news => news !== null); // Фильтруем нулевые значения
        } catch (error) {
            console.error('Ошибка при получении полного списка новостей:', error);
            return [];
        }
    };
}
const configPostList = new ConfigPostList();
export default configPostList;
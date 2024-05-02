
import { getPost } from "../api/api.tsx";
import { post } from "../../PostList/models/post.tsx"

class ConfigPostItem {
    unixtime = async (id: number): Promise<post | {}> => {
        try {
            const postData = await getPost(id);
            const unix_timestamp = postData.time
            const date = new Date(unix_timestamp * 1000);
            postData.time = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            });
            postData.countKids = postData?.kids?.length ? postData?.kids?.length : 0;
            return postData;
        } catch (error) {
            console.error('Ошибка при извелечении даты', error);
            return {};
        }
    };
}
const configPostItem = new ConfigPostItem();
export default configPostItem;
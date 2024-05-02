import { runInAction } from "mobx";
// import configPostLis from "../config/config.tsx";
import { post } from "../../PostList/models/post.tsx";
import { makeAutoObservable } from "mobx";
import { getCommentById } from "../api/api.tsx";





class StoreComment{

    currentComment: post;
    count: number;
    isLoading: boolean;

    constructor(){
        this.count = 0;
        makeAutoObservable(this)
    }

    getComment = async (id:number)  =>  {
        this.isLoading = true;
        const newsData =  await getCommentById(id)
        runInAction(()=>{
            
            this.count+=1
            // console.log(this.count)
            
        })
        this.isLoading = false;
        return newsData
        
    }
}
const storeComment = new StoreComment();
export default storeComment;
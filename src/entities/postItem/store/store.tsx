import { runInAction } from "mobx";
// import configPostLis from "../config/config.tsx";
import { post } from "../../PostList/models/post.tsx";
import { makeAutoObservable } from "mobx";
import { getPost } from "../api/api.tsx";
import configPostItem from "../configs/config.tsx";




class StorePost{

    currentPost: post;
    isLoading: boolean;

    constructor(){
        makeAutoObservable(this)
    }

    getPost = async (id:number)  =>  {
        try{
            this.currentPost = {}
            this.isLoading = true;
            const newsData =  await configPostItem.unixtime(id)
            runInAction(()=>{
                
                this.currentPost = newsData;
                // console.log(newsData)
                this.isLoading = false;
            })
        }
        catch(e){
            console.log(e)
        }
    }
    setCountKids = (number) => {
        runInAction(()=>{
            this.currentPost.countKids = (this.currentPost.countKids || 0) + number;
        })

    }

    updateComments = async (id:number)  =>  {
        try{
            const newsData =  await configPostItem.unixtime(id)
            runInAction(()=>{
                if (newsData?.kids && this.currentPost) {
                    this.currentPost.kids = newsData.kids;
                }
               
            })
        }
        catch(e){
            console.log(e)
        }
    }

}
const storePost = new StorePost();
export default storePost;
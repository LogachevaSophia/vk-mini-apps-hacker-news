import { runInAction } from "mobx";
import configPostLis from "../config/config.tsx";
import { post } from "../models/post";
import { makeAutoObservable } from "mobx";




class StorePostList{

    listPostArr: post[] = [];
    isLoading: boolean;

    constructor(){
        makeAutoObservable(this)
    }

    

    getList = async () =>  {
        console.log(new Date().getTime())
        this.isLoading = true;
        const newsData =  await configPostLis.getFullNewsList()
        runInAction(()=>{
            this.listPostArr = newsData;
            // console.log(newsData)
            this.isLoading = false;
        })
        
    }
}
const storepostList = new StorePostList();
export default storepostList;
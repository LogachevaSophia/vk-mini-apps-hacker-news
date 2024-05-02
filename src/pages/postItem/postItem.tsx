import { PanelHeader } from "@vkontakte/vkui";
import { makeObservable } from "mobx";
import React from "react";
import PostList from "../../widgets/postList/PostList.tsx";
import Post from "../../entities/postItem/components/post.tsx"
import { Icon24Back } from '@vkontakte/icons';
import { observer } from "mobx-react";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

const PostItem = makeObservable(() => {

    const routeNavigator = useRouteNavigator();
    return (
        <>
            
            <PanelHeader>
                Страница постов
            </PanelHeader>
            <Icon24Back width={20} height={20} fill={"#0077FF"} style={{cursor:"pointer"}}onClick={()=>routeNavigator.push('/')}/>
            {/* <PostList></PostList> */}
            <Post></Post>
        </>
    )


})

export default PostItem;
import { PanelHeader } from "@vkontakte/vkui";
import React from "react";
import PostList from "../../widgets/postList/PostList.tsx";
import { makeObservable } from "mobx";

const postList = makeObservable(() => {

    return (
        <>
            <PanelHeader>
                Cписок новостей
            </PanelHeader>
           
            <PostList></PostList>
        </>
    )



})


export default postList;
import { useParams } from "@vkontakte/vk-mini-apps-router";
import { Button, Card, Div, Title } from "@vkontakte/vkui";
import { makeObservable } from "mobx";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import storePost from "../store/store.tsx";
import AccordeonItem from "../../Comment/components/AccordeonItem.tsx";
import Spinner from "../../../widgets/Spinner/Spinner.tsx";
import { Icon16Replay } from "@vkontakte/icons";

const Post = observer(() => {
    const params = useParams();

    useEffect(() => {
        if (params?.postId) {
            storePost.getPost(params?.postId);
        }
    }, []);

    return (
        <>
            <Spinner loading={storePost?.isLoading}></Spinner>
            {!storePost?.isLoading && <Card mode="shadow" style={{ margin: "7px 15px" }}>
                <Div>
                    {storePost.currentPost && (
                        <>

                            <Title level="2">{storePost.currentPost?.title}</Title>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <i> {storePost.currentPost?.time}</i>
                                </div>
                                <div>Автор: <i><b>{storePost.currentPost?.by}</b></i></div>
                            </div>

                            <a href={storePost.currentPost?.url}> Источник</a>
                            {storePost.currentPost?.kids && <Title level="3">Количество комментариев: {storePost.currentPost?.countKids}</Title>}
                            <Div >
                                <Icon16Replay fill={"#0077FF"} style={{ cursor: "pointer" }} onClick={() => {
                                    storePost?.updateComments(storePost.currentPost?.id);
                                }}></Icon16Replay>
                            </Div>
                            {
                                storePost.currentPost?.kids && storePost.currentPost?.kids?.map(el => {
                                    return (
                                        <AccordeonItem key={el} commentId={el}></AccordeonItem>
                                    )
                                }
                                )
                            }


                        </>
                    )}
                </Div>
            </Card>}
        </>
    );
});



export default Post;
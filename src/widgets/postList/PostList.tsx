import React, { useEffect } from "react";
import Post from "../../entities/PostList/components/postItem/post.tsx";
import storepostList from "../../entities/PostList/store/store.tsx";
import { observer } from "mobx-react";
import Spinner from "../Spinner/Spinner.tsx";
import { Icon16Replay } from "@vkontakte/icons";
import { Div } from "@vkontakte/vkui";

const PostList = observer(() => {
    useEffect(() => {
        if (!storepostList.listPostArr?.length)
        storepostList.getList(); // вызываем функцию getList сразу после монтирования компонента

        const intervalId = setInterval(() => {
            storepostList.getList();
        }, 60000);
    
        return () => clearInterval(intervalId); // Очистка интервала при размонтировании компонента
    }, []);


    return (
        <>

            <Spinner loading={storepostList?.isLoading}></Spinner>
            {!storepostList?.isLoading &&
                <>
                    <Div >
                        <Icon16Replay fill={"#0077FF"} style={{cursor:"pointer"}} onClick={()=>{
                            storepostList.getList();
                        }}></Icon16Replay>
                    </Div>
                    {storepostList.listPostArr?.map((el, ind) => {
                        return <Post key={el.id} title={el.title} rating={el.score} created={el.time} index={ind + 1} loginAuthor={el.by} id={el.id}></Post>
                    })
                    }
                </>}
        </>

    )
})

export default PostList;

// function observer(arg0: () => React.JSX.Element) {
//     throw new Error("Function not implemented.");
// }

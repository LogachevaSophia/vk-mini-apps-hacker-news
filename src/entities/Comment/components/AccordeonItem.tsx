import { Card, Div, Title } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import storeComment from "../store/AccoredeonStore.tsx";
import storePost from "../../postItem/store/store.tsx";
import Spinner from "../../../widgets/Spinner/Spinner.tsx";

const AccordeonItem = observer(({ commentId }) => {
    const [isActive, setIsActive] = useState(false);

    const [curComment, setCurComment] = useState({})
    useEffect(() => {

        const fetchComment = async () => {
            const comment = await storeComment.getComment(commentId);
            setCurComment(comment);
        };

        fetchComment();
        return () => {
        };

    }, [])

    const toggle = () => {
        if (isActive){
            //закрывают
          
            storePost?.setCountKids(-(curComment?.kids?.length) || 0)
        }
        else{
            //открывают
           
            storePost?.setCountKids((curComment?.kids?.length) || 0)
        }
    }


   
    return (
        <>
            {!curComment?.text && <Spinner loading={true} />}
            {curComment?.text &&
                <Card mode="shadow" style={{ margin: "7px 15px" }} >
                    <Div>
                        <>
                            <div onClick={() => {toggle();
                                setIsActive(!isActive)
                            }} style={{ cursor: "pointer" }}>
                                <span>{curComment?.text} </span>
                                <br></br>
                                <div style={{ textAlign: "right" }}>Автор: <b>{curComment?.by}</b></div>
                                {curComment?.kids && <div>{isActive ? 'Скрыть' : 'Раскрыть'}</div>}
                            </div>


                            {curComment?.kids && isActive &&
                                curComment?.kids?.map((el) => {
                                    return (
                                        <AccordeonItem key={el} commentId={el}></AccordeonItem>
                                    )
                                })
                            }
                        </>
                    </Div>
                </Card>}
        </>
    )

})

export default AccordeonItem;
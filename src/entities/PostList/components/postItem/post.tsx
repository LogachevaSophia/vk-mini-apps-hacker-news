import { Button, Card, Div, Title } from "@vkontakte/vkui";
import { makeObservable } from "mobx";
import React from "react";
const Post = makeObservable(({ title, rating, loginAuthor, created, id, index }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
          stars.push(<span key={i} className="star">⭐</span>);
        }
        return stars;
      };
      const formatDate = (unixTime) => {
        const date = new Date(unixTime * 1000);
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        });
      };

    return (
        <Card mode="shadow" style={{ margin: "7px 15px" }}>
            <Div>
                <Title level="3">#{index}</Title>
                <Title level="2">{title}</Title>
                <span>Автор: <i>{loginAuthor}</i></span><br></br>
                
                {renderStars()}
               
                <br></br>
                <span>{formatDate(created)}</span><br></br>
                <br></br>

                <Button
                    align={"center"}
                    href={`#post/${id}`}
                    // before={buttonBefore}
                    // after={buttonAfter}
                    // appearance={appearance}
                    // stretched={stretched}
                    rounded={false}
                    mode={"primary"}
                    // disabled={disabled}
                    size={"s"}

                    onClick={() => { }}
                >
                    Подробнее
                </Button>

            </Div>
        </Card>
    )

})



export default Post;
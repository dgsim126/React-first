import React from "react";
import Comment from "./Comment";

const comments=[
    {
        name: "donggeun",
        comment: "Hi there!"
    },
    {
        name: "SSAFY",
        comment: "You can join with us!"
    },
    {
        name: "donggeun",
        comment: "I already know that!!"
    }
]

function CommentList(props){
    return (
        // <div>
        //     <Comment name={"donggeun"} comment={"Hi there"}/>
        //     <Comment name={"donggeun"} comment={"I hate this"}/>
        // </div>
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    );
}

export default CommentList;
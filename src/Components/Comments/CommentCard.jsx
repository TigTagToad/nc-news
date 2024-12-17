import { useState, useEffect } from "react"
import { getUserByUsername } from "../../axios/api"
import { Avatar } from "@mui/material";
import Paper from '@mui/material/Paper';

export default function CommentCard ({comment}) {
    const [imgURL, setImageURL] = useState("");

    useEffect(()=>{
        const username = comment.author
        getUserByUsername(username).then(({user})=>{

            const url = user.avatar_url
            setImageURL(url)
        })
    },[])

    return(
        <div className="comment">
        <Paper>
        <h4 >{comment.author}</h4>
        <Avatar src={imgURL} className="avatar" sx={{ width: 50, height: 50 }}/>
        <p className="comment_body">{comment.body}</p>
        <p className="votes">{comment.votes}</p>
        </Paper>
        </div>
    )

}
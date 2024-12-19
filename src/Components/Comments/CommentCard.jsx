import { useState, useEffect } from "react"
import { getUserByUsername } from "../../axios/api"
import { Avatar } from "@mui/material";
import Paper from '@mui/material/Paper';
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { deleteComment } from "../../axios/api";


export default function CommentCard ({comment}) {
    const [imgURL, setImageURL] = useState("");
    const {user} = useContext(UserContext)
    const [deletedComment, setDeletedComment] = useState(false)
    const [error, setError] = useState("")

    useEffect(()=>{
        const username = comment.author
        getUserByUsername(username).then(({user})=>{

            const url = user.avatar_url
            setImageURL(url)
        })
    },[])

    const handleDelete= (event) => {
        setDeletedComment(true)
        event.preventDefault()
        setError(null)
        deleteComment(comment.comment_id).then(()=>{
            
        })
        .catch((err)=>{
            setError("comment was not deleted try again")
            setDeletedComment(false)
        })
    }


    if(!deletedComment) {

        return(
            
            <div className="comment">
            <Paper>
            <h4 >{comment.author}</h4>
            <Avatar src={imgURL} className="avatar" sx={{ width: 50, height: 50 }}/>
            <p className="comment_body">{comment.body}</p>
            <p className="votes">{comment.votes}</p>
            {comment.author === user.username ? <button type="submit" onClick={handleDelete}><span>Delete</span></button>
            : null }
            {error ? <p>{error}</p> : null}
            </Paper>
            </div>
        )
    }

}
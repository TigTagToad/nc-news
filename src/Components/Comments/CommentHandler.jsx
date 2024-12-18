import { addComment } from "../../axios/api"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useParams } from "react-router";

 export default function CommentHandlerAdd () {
    const {article_id} = useParams()
    const [newComment, setNewComment] = useState("");
    const [error, setError] = useState("")
    const {user} = useContext(UserContext)

    const handleClick = (event) => {
            event.preventDefault()
            setError(null);
            addComment(article_id,{body: newComment, author: user.username})
            .then(()=>{
                setNewComment("")
            })
            .catch((err)=>{
                
                setError("Your comment post was not successful. Please try again!");
            })

    }


    return(
            <div className="comment">
            <form id="comment-form">
              <label id="comment-label">
                Add a comment: 
                <textarea 
                className="text"
                name="newComment" rows="3" cols="50"
                id="new-comment"
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}>

                </textarea>
              </label>
              <button type="submit" onClick={handleClick} className="comment"><span>Add Comment</span></button>
            </form>
            {error ? <p>{error}</p> : null}
            </div>
          );
    

}




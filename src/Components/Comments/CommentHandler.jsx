import { addComment } from "../../axios/api"
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useParams } from "react-router";
import CommentCard from "./CommentCard";
import CommentList from "./CommentList";

 export default function CommentHandlerAdd ({comments}) {
    const {article_id} = useParams()
    const [newComment, setNewComment] = useState("");
    const [commentAdded, setCommentAdded] = useState(null)
    const [error, setError] = useState("")
    const {user} = useContext(UserContext)
    const [commentID, setCommentID] = useState(null)
    

    const handleClick = (event) => {
            event.preventDefault()
            setCommentAdded({body : newComment, author: user.username, votes: 0})
            setError(null);
            addComment(article_id,{body: newComment, author: user.username})
            .then((res)=>{
                setCommentID(res.comment_id)
                setNewComment("")
            })
            .catch((err)=>{
                setCommentAdded(null)
                setError("Your comment post was not successful. Please try again!");
            })

    }


    return(
      <>
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
            {commentAdded ? <CommentCard key={commentID} comment={{comment_id: commentID, ...commentAdded}}/>: null } 
            <CommentList comments={comments}/>
      </>
          );
    

}




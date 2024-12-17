import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useParams } from "react-router";
import { deleteComment } from "../../axios/api";

export default function CommentHandlerDelete ({comment_id}) {
    const [error, setError] = useState("")
    const handleClick= (event) => {
       
        event.preventDefault()
        setError(null)
        deleteComment(comment_id).then(()=>{
            
        })
        .catch((err)=>{
            setError("comment was not deleted try again")
        })
    }

    return(
        <>
        <button type="submit" onClick={handleClick}><span>Delete</span></button>
         {error ? <p>{error}</p> : null}
        
        </>
        
    )

}
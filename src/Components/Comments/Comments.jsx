
import { useState, useEffect} from "react"
import { getCommentsByArticleId } from "../../axios/api"
import CommentHandlerAdd from "./CommentHandler"


export default function Comments({article_id}){
const [comments, setComments] = useState([])
useEffect(()=>{
    getCommentsByArticleId(article_id).then((comments)=>{
        setComments(comments)

    })
},[])

return(
  <CommentHandlerAdd comments={comments}/>
)
}


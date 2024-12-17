import { useState, useEffect} from "react"
import { getCommentsByArticleId } from "../../axios/api"
import CommentList from "./CommentList"


export default function Comments({article_id}){
const [comments, setComments] = useState([])
useEffect(()=>{
    getCommentsByArticleId(article_id).then((comments)=>{
        setComments(comments)

    })
},[comments])

return(
  <CommentList comments={comments}/>
)
}
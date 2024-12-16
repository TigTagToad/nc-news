import { useParams} from "react-router"
import Comments from "../Comments/Comments"
import { useEffect, useState } from "react"
import { Avatar, Paper } from "@mui/material";
import { getUserByUsername } from "../../axios/api";

export default function ArticleById ({article}) {

const {article_id} = useParams()



const handleClick = () => {

}
   
return(
<>
<h2>{article.title}</h2>
<p>written by: {article.author}</p>
{/* <Avatar src={imgURL}/> */}
<Paper square={false} >

<p >{article.topic}</p>
</Paper>
<p>{article.created_at}</p>
<img src={article.article_img_url}/>
<p>{article.body}</p>
<button type="submit" onClick={handleClick}>{article.votes}</button>
<Comments article_id={article_id} />
</>

)
}
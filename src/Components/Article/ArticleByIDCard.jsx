import { useParams} from "react-router"
import Comments from "../Comments/Comments"
import { useEffect, useState } from "react"
import { Avatar, Paper } from "@mui/material";
import { getUserByUsername } from "../../axios/api"
import VoteHandler from "../VoteHandler";
import CommentHandlerAdd from "../Comments/CommentHandler";

export default function ArticleById ({article}) {

const {article_id} = useParams()

return(
<>
<div className="article">
<h2>{article.title}</h2>

<p>written by: {article.author}</p>
{/* <Avatar src={imgURL}/> */}
<Paper square={false} >

<p >{article.topic}</p>
</Paper>
<p>{article.created_at}</p>
<img src={article.article_img_url}/>
<p className="article">{article.body}</p>
</div>
<VoteHandler votes={article.votes} article_id={article_id} />
{/* <button type="submit" onClick={handleClick}>{article.votes + votesAdded}</button> */}
<CommentHandlerAdd />
<Comments article_id={article_id} />
</>

)
}
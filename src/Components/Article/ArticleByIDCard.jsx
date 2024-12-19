import { useParams} from "react-router"
import Comments from "../Comments/Comments"
import { Paper } from "@mui/material";
import VoteHandler from "../VoteHandler";

export default function ArticleById ({article}) {

const {article_id} = useParams()

return(
<>
<div className="article">
<h2>{article.title}</h2>

<p>written by: {article.author}</p>
<Paper square={false} >

<p >{article.topic}</p>
</Paper>
<p>{article.created_at}</p>
<img src={article.article_img_url}/>
<p className="article">{article.body}</p>
</div>
<VoteHandler votes={article.votes} article_id={article_id} />
<Comments article_id={article_id} />
</>

)
}
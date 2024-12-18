import { Link } from "react-router-dom"
export default function ArticleCard ({article}) {

    return (
        <>
        <h2>{article.title}</h2>
        <img src= {article.article_img_url}/>
        <div>
        <Link to={`/articles/${article.article_id}`} key={article.article_id}>Read More</Link>
        </div>
        </>
    )
}
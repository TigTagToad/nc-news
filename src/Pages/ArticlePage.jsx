import { useParams } from "react-router";
import Article from "../Components/Article/ArticleByID";
import Header from "../Components/Header";

export default function ArticlePage () {
    const {article_id} = useParams()
    return (
        <>
       
        <Article article_id={article_id}/>
        </>
    )
}
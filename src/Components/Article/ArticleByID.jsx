import { useState, useEffect } from "react";
import ArticleById from "./ArticleByIDCard";
import { getArticlesById } from "../../axios/api";

export default function Article ({article_id}) {

        const [article, setArticle] = useState({})
        
        
        useEffect(() => {
            getArticlesById(article_id).then(( article ) => {
              
              setArticle(article);
            
            });
          }, [article_id]);
          
    return(
        <ArticleById article={article}/>
    )

}
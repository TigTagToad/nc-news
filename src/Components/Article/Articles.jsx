import ArticlesList from "./ArticlesList"
import { getArticles} from "../../axios/api";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";


export default function Articles () {

    const [articles, setArticles] = useState([]);
 
  
        
        useEffect(() => {
          getArticles().then(( {articles} ) => {
            setArticles(articles);
          });
        }, []);

    return(
        <ArticlesList articles={articles}/>
    )
    }
    
  

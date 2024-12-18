import ArticlesList from "./ArticlesList"
import { getArticles} from "../../axios/api";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";


export default function Articles () {

    const [articles, setArticles] = useState([]);
 
    const {topic} = useParams()
        
        useEffect(() => {
          getArticles(topic).then(( {articles} ) => {
            console.log(articles)
            setArticles(articles);
          });
        }, [topic]);

    return(
        <ArticlesList articles={articles}/>
    )
    }
    
  

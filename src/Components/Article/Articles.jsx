import ArticlesList from "./ArticlesList"
import { getArticles} from "../../axios/api";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router";


export default function Articles () {

    const [articles, setArticles] = useState([]);
 
    const {topic} = useParams()
    const [searchParams] = useSearchParams();  

    const sort_by = searchParams.get('sort_by') || 'created_at';  
    const order = searchParams.get('order') || 'ASC';

   
        
        useEffect(() => {
          getArticles(topic, sort_by, order).then(( {articles} ) => {
            setArticles(articles);
          });
        }, [topic, sort_by, order]);

    return(
        <ArticlesList articles={articles}/>
    )
    }
    
  

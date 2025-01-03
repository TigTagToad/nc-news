import ArticleCard from "./ArticleCard";
import { getArticles } from "../../axios/api";
import { useState } from "react";
import { useEffect } from "react";
import Grid from '@mui/material/Grid2';

export default function ArticlesList ({articles}) {


return (
   

    <div className="container">
    
        {
            articles.map((article) => {
                return (
                
                <ArticleCard key={article.article_id} article={article}/>
               
                )
            })
        }
    
    </div>

   
)
}
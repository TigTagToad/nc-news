import ArticleCard from "./ArticleCard";
import { getArticles } from "../../axios/api";
import { useState } from "react";
import { useEffect } from "react";

export default function ArticlesList ({articles}) {


return (
    <div className="article">
    <ul>
        {
            articles.map((article) => {
                return <ArticleCard key={article.article_id} article={article}/>
            })
        }
    </ul>
    </div>
)
}


export default function ArticleById ({article}) {
   
return(
<>
<h2>{article.title}</h2>
<p>{article.topic}</p>
<img src={article.article_img_url}/>
<p>{article.body}</p>
</>

)
}
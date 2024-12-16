import axios from "axios";

const newsApi = axios.create({
    baseURL: `https://nc-news-g82w.onrender.com/api`,
  });


export const getArticles = () => {


    return newsApi.get(`/articles`,{
      params: {
        limit : 10
      }
    }).then(( {data}) => {
        const {articles} = data
        
      return articles;
    });
  };

export const getArticlesById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
    .then(( {data}) => {
        
          const {article} = data
          
        return article;
      });
}

export const getCommentsByArticleId = (article_id) =>{
  return newsApi.get(`/articles/${article_id}/comments`).then(({data})=>{
    
    const {comments} = data
    return comments
    
  })
}

export const getUserByUsername = (username) => {
return newsApi.get(`/users/${username}`).then(({data})=>{
  return data
})
}

export const updateVotesOnArticleById = (article_id) => {
  return newsApi.patch(`/article/${article_id}`)
}
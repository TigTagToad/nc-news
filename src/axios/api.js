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
    return newsApi.get(`/articles/${article_id}`,{
        params: {
          limit : 10
        }
      }).then(( {data}) => {
        
          const {article} = data
          
        return article;
      });
}
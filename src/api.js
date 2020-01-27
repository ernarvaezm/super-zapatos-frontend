const url = ''
const axios = require('axios');


const HTTP = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {//
    'Content-Type': 'application/json',

  }
  })


//get all the stores
async function getStores() {

    try {
      const response = await HTTP.get('/services/stores');
        return response.data.stores;

    } catch (error) {
      console.error(error);
    }
  }


//update specific store
  async function updateStore(store) {
    try {
      const response = await HTTP.put('/services/stores/'+store.id,store);
        return response.data;

    } catch (error) {
      console.error(error);
    }
    }

    async function deleteStore(store_id) {

        try {
          const response = await HTTP.delete('/services/stores/'+store_id);

            return response.data;

        } catch (error) {

          console.error(error);
        }
      }

//save a new store
      async function addStore(store) {
        try {
          const response = await HTTP.post('/services/stores',store);
            return response.data;

        } catch (error) {
          console.error(error);
        }
    }

//articles enPoints


//get all the articles
async function getArticles() {

    try {
      const response = await HTTP.get('/services/articles');
        return response.data.articles;

    } catch (error) {
      console.error(error);
    }
  }

//get all the articles that belongs to an specific store
async function articlesByStore(store_id) {

    try {
      const response = await HTTP.get('/services/articles/store/'+store_id);
        return response.data.articles;

    } catch (error) {
      console.error(error);
    }
  }

  //delete an article
  async function deleteArticle(id) {

      try {
        const response = await HTTP.delete('/services/articles/'+id);

          return response.data;

      } catch (error) {

        console.error(error);
      }
    }
    //update article by ID
    async function updateArticle(article) {
      try {
        const response = await HTTP.put('/services/articles/'+article.id,article);
          return response.data;

      } catch (error) {
        console.error(error);
      }
    }
    //add an article
    async function addArticle(article) {
      try {
        const response = await HTTP.post('/services/articles/',article);
          return response.data;

      } catch (error) {
        console.error(error);
      }
    }

  export default {
    getStores,updateStore,deleteStore, addStore,articlesByStore,deleteArticle,updateArticle,addArticle,getArticles
  }

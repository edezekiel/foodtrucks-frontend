const fetch = require('node-fetch');

const API_HOST = "https://api.yelp.com"
const SEARCH_PATH = "/v3/businesses/search"

const YELP_URL = `${API_HOST}${SEARCH_PATH}?term=food-truck&limit=20&location=atlanta`
const API_KEY = "yGo4Vncfb3CSxN-t-xaVYevosHp4GMlsYAwF1QwC-IoxHhRWcKFp9I_5Ac6X8vU_IjTK1tziF2kznnjMXqVwwxaeQOklxHdak5asXMSdFQd_6GIsTIsQHVWfc7cbXHYx"

options = {
  method: "GET",
  headers: {
    "Authorization":`Bearer ${API_KEY}`
  }
}
//
// document.addEventListener('DOMContentLoaded', () => {
//   alert('LOADED');
// });

fetch(YELP_URL, options)
.then(resp => resp.json())
.then(console.log)

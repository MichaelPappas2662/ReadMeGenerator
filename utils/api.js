const axios = require('axios');

const  api = {
    async getUser(username) {
      const queryUrl = `https://api.github.com/users/${username}`;
      await axios
      .get(queryUrl)
      .then(function(res){
        return gitHubImage = res.data.avatar_url; 
      });
    }}
module.exports = api;
const axios = require('axios');

function getPRTitle(data) {
  return axios({
    method: 'GET',
    url: `https://api.github.com/repos/${data.repo}/pulls/${data.pr}`,
    responseType: 'json',
    headers: {Authorization: `token ${data.token}`}
  }).catch(e => {
    const response = e.response || {status: 500};

    return Promise.reject({
      status: response.status,
      error: response.data
    });
  });
}

module.exports.getPRTitle = getPRTitle;


import axios from 'axios';

function fetch(option) {
  switch (option.method) {
    case 'GET':
      return axios.get('https://www.haloapi.com/profile/' + option.url, {
        headers: {
          'Ocp-Apim-Subscription-Key': '7deb6c7986144ceb893ec3041f0ef591',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })


    default:
      break;
  }
  /* axios.request(config)
   axios.get(url[, config])
   axios.delete(url[, config])
   axios.head(url[, config])
   axios.options(url[, config])
   axios.post(url[, data[, config]])
   axios.put(url[, data[, config]])
   axios.patch(url[, data[, config]])*/

}

export default fetch;

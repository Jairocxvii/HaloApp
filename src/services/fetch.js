import axios from 'axios';
const Subscriptionkey = process.env.REACT_APP_SUBSCRIPTION_KEY;
const APIBaseUrl = process.env.REACT_APP_API_URL;
function fetch(option) {

  var config = {
    maxRedirects: 2,
    headers: {
      'Ocp-Apim-Subscription-Key': Subscriptionkey,
    }
  }
  switch (option.method) {
    case 'GET':
      return axios.get(APIBaseUrl + option.url, config)
    case 'POST':
      return axios.post(APIBaseUrl + option.url, config)
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

import axios from "axios";
const Subscriptionkey = process.env.REACT_APP_SUBSCRIPTION_KEY;
const APIBaseUrl = process.env.REACT_APP_API_URL;
export default axios.create({
    baseURL: APIBaseUrl,
    headers: {
        "Content-type": "application/json",
        'Ocp-Apim-Subscription-Key': Subscriptionkey,
    }
});
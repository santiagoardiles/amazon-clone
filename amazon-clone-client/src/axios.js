/*    axios.js    */

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-jr/us-central1/api", // The API URL goes here.
});

export default instance;

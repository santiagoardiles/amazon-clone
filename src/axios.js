/*    axios.js    */

import axios from "axios";

const instance = axios.create({
  // The API URL goes here.
  baseURL: "https://us-central1-clone-jr.cloudfunctions.net/api",
});

export default instance;

// Localhost.
// http://localhost:5001/clone-jr/us-central1/api

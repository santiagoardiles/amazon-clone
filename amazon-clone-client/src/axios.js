/*    axios.js    */

import axios from "axios";

const instance = axios.create({
  baseURL: "", // The API URL goes here.
});

export default instance;

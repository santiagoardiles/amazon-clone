/*    index.js    */

// Setup.
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hj17lC1YX8p2d4cnlZLi1d2NvhDY4tjhGwC7g59ujymVSM6wvcaiyxJotjR0UFP4g6clZYqUZHmrGVOau0tO37g00PGjgW915"
);

// API.

// App configurtation.
const app = express();

// Middlewares.
app.use(cors({ origin: true }));
app.use.use(express.json());

// API routes.
app.get("/", (req, res) => res.status(200).send("Hello World!"));

// Listen command.
exports.api = functions.https.onRequest(app);

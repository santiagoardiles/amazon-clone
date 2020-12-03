/*    index.js    */

// Setup.
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51Hj17lC1YX8p2d4cnlZLi1d2NvhDY4tjhGwC7g59ujymVSM6wvcaiyxJotjR0UFP4g6clZYqUZHmrGVOau0tO37g00PGjgW915"
);

// API.

// App configurtation.
const app = express();

// Middlewares.
app.use(cors({ origin: true }));
app.use(express.json());

// API routes.
app.get("/", (req, res) => res.status(200).send("Hello World!"));
app.get("/santiago", (req, res) => res.status(200).send("Santiago!"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received for this amount -->", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command.
exports.api = functions.https.onRequest(app);

// Example endpoint.
// http://localhost:5001/clone-jr/us-central1/api

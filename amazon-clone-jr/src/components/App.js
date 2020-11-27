/*    App.js    */

// Setup.
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Styles.
import "../styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Router path="/checkout">
            <Checkout />
          </Router>

          <Router path="/">
            <Home />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

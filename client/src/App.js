import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Rent from "./components/pages/Rent";
import Buy from "./components/pages/Buy";
import Post from "./components/pages/Post";
import Request from "./components/pages/Request";
import Signup from "./components/sign-up";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/rent" component={Rent} />
        <Route exact path="/buy" component={Buy} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/request" component={Request} />
      </div>
    </Router>
  );
}


export default App;

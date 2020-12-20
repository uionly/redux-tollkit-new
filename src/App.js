import React from "react";
import { Posts } from "./features/posts/Posts";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <RenderRoutes />
        <RenderComp />
      </div>
    </Router>
  );
}
function RenderComp() {
  return (
    <div className="App-padding-20">
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
function RenderRoutes() {
  return (
    <div className="App-padding-20">
      <nav className="navbar-nav">
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/counter">Counter</Link>
          </li>
          <li className="nav-item">
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
function Home() {
  return <h2>Home</h2>;
}

import { Posts } from "./features/posts/Posts";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Youtube } from "./features/youtube/youtube";
export default function App() {
  return (
    <Router>
      <div className="container">
        <RenderRoutes />
        <RenderComp />
      </div>
    </Router>
  );
}
function RenderComp() {
  return (
    <div className="row">
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
    <div className="row">
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
  return <Youtube />;
}

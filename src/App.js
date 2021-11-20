import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDEtail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import StopWatch from './components/Stopwatch'

function App() {
  return (
    <div className="app">
      {/* <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/movie/:imdbID" component={MovieDEtail} />
            <Route component={PageNotFound} />
            
          </Switch>
        </div>
        <Footer />
      </Router> */}
      <StopWatch />
    </div>
  );
}

export default App;

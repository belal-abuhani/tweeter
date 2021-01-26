import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Explore from "./components/explore/Explore"
import Bookmarkes from "./components/bookmarkes/Bookmarkes"



function App() {
  return (
    <div className="App">

      <BrowserRouter>

        {/* Navbar */}
        <Navbar />

        <Switch>
          <Route exact path={"/"} render={() => (<Home />)}></Route>
          <Route exact path={"/Explore"} render={() => (<Explore />)}></Route>
          <Route exact path={"/Bookmarkes"} render={() => (<Bookmarkes />)}></Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;

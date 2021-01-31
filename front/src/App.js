import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Profile from "./components/home/profile"
import Explore from "./components/explore/Explore"
import Bookmarkes from "./components/bookmarkes/Bookmarkes"
import SginUp from "./components/auth/SginUp"



function App() {


  const isLogin = window.localStorage.getItem('userId');


  return (
    <div className="App">

      <BrowserRouter>

        {/* Navbar */}
        {isLogin && <Navbar />}

        <Switch>
          <Route exact path={"/"} render={() => (isLogin ? <Home /> : <SginUp />)}></Route>
          <Route exact path={"/Explore"} render={() => (<Explore />)}></Route>
          <Route exact path={"/Bookmarkes"} render={() => (<Bookmarkes />)}></Route>
          <Route exact path={"/profile"} render={() => (<Profile />)}></Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;

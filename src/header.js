import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from "./home";
import TradeScreen from "./tradeScreen";
import logo from "./assets/logo.png"


export default function Header(){
    return (
        <div className='header'>
            
                <Link to="/" className="links" id="logoContainer" ><img src={logo} id="logo"></img></Link>
                <Link to="/" className="links">Home</Link>
                <Link to="/trade" className="links">Trade</Link>
            
        </div>
    )
}
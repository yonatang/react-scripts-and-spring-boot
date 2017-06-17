import React, {Component} from "react";
import logo from "./logo.svg";
import "./style.css";

class Header extends Component {
    render() {
        return <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React + Spring Boot</h2>
        </div>
    }
}

export default Header;
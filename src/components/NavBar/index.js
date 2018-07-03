import React, { Component } from 'react';
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar";

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <div className="navbar__logo">
                        <Link to="/"><span>Gifs</span></Link>
                    </div>

                    <SearchBar />                 
                </div>
            </nav>
        );
    }
}
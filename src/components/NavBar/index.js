import React, { Component } from 'react';
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar";

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <div className="navbar__logo">
                        <Link to="/"><span>GIF</span></Link>
                    </div>

                    <SearchBar />

                     <div className="navbar__favorites">
                        <Link to="/favorites"><img src="." className="navbar__favorites-logo" alt="Favorites View"/></Link>
                    </div>                   
                </div>
            </nav>
        );
    }
}
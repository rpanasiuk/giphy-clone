import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar";
import { fetchTrendingData } from "../../actions/fetch-data.js";

class NavBar extends Component {

    getMainRouteData = () => {
        if (!this.props.isRendering) {
            this.props.fetchTrendingData();            
        }
    }

    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <div className="navbar__logo">
                        <Link to="/" onClick={this.getMainRouteData}><span>Gifs</span></Link>
                    </div>

                    <SearchBar />                 
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ isRendering }) {
    return { isRendering };
}

export default connect(mapStateToProps, { fetchTrendingData })(NavBar)
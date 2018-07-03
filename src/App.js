import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heart, faUpload as upload, faHome as home } from '@fortawesome/free-solid-svg-icons'

import NavBar from "./components/NavBar";
import BurgerMenu from "./components/Menu";
import Main from "./routes/Main";
import Favorites from "./routes/Favorites";
import { fetchTrendingData } from "./actions/fetch-data.js";

import logo from './logo.svg';
import './App.css';

library.add([heart, upload, home]);

const routes = [
    {
        path: "/",
        component: Main,
        exact: true        
    },
    {
        path: "/favorites",
        component: Favorites        
    }
];


class App extends Component {

    componentDidMount() {
        // init fetch
        this.props.fetchTrendingData();
    }

    render() {
        const { gifs, favorites } = this.props;
        routes[0].data = gifs;
        routes[1].data = Object.values(favorites);

        return (
            <BrowserRouter>
                <div className="view" id="outer-container">
                    <NavBar />
                    <BurgerMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
                    <main id="page-wrap">
                        <Switch>
                            {routes.map(({ component: C, data, ...args }, index) => {
                                return <Route
                                    key={index}
                                    render={(props) => <C {...props} data={data} /> }
                                    {...args}
                                />                    
                            })}                  
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps({ gifs, favorites }) {
    return { gifs, favorites };
}

export default connect(mapStateToProps, { fetchTrendingData })(App);
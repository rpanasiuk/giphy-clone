import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import GifList from "./components/GifList";
import NavBar from "./components/NavBar";

import { fetchData as initFetchData } from "./actions/fetch-data.js";

import logo from './logo.svg';
import './App.css';

const routes = [
    {
        path: "/",
        component: GifList,
        exact: true        
    },
    {
        path: "/favorites",
        component: GifList        
    }
];


class App extends Component {

  componentDidMount() {
    // init fetch
    this.props.initFetchData(''); // do sprawdzenia
  }

  render() {
    const { gifs, favorites } = this.props;
    routes[0].data = gifs;
    routes[1].data = Object.values(favorites); //sprawdz zachowanie pustego obiektu

    console.log('app render', this.props);
    return (
      <BrowserRouter>
          <div className="view">
              <NavBar />
              <main>
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

export default connect(mapStateToProps, { initFetchData })(App);
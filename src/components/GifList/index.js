import React, { Component } from 'react';

import Gif from "../Gif";

export default class GifList extends Component {
    render() {
        const { data } = this.props;
        if (data) {
            return (
                <div className="container main-wrap" id='container'>
                    {data.map((gif, i) => {
                        return <Gif key={i} data={gif} />
                    })}
                </div>
            );        
        } else {
            return null;
        }
    }
}
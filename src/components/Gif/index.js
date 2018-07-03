import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { toggleFavoriteGif } from "../../actions/toggle-favorite-gif.js";

class Gif extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleToggle = () => {
        const dataObject = {};
        const { data: { id }, data } = this.props;
        dataObject[id] = data;
        this.props.toggleFavoriteGif(dataObject);
    };  

    render() {
        const { original, fixed_width } = this.props.data.images;

        return (
            <MuiThemeProvider>
                <div className='box'>
                    <div className='gif'>
                        <a onClick={this.handleOpen}>
                            <img src={fixed_width.gif_url} alt="Loading..." />
                        </a>
                    </div>

                    <Dialog
                        modal={false}
                        open={this.state.open}
                        autoDetectWindowHeight={true}
                        autoScrollBodyContent={true}
                        onRequestClose={this.handleClose}
                    >
                        <div className="popup">
                            <img src={original.gif_url} alt="Loading..." />
                            <div className="popup__box">
                                <div><span>Author</span></div>
                                <div><span>Rating</span></div>
                                <div><span>Button copying link</span></div>
                                <a className="favorite" onClick={this.handleToggle}>FAV</a>
                            </div>
                        </div>                        
                    </Dialog>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(null, { toggleFavoriteGif })(Gif)
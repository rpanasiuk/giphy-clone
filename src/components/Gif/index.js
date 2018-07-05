import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { toggleFavoriteGif } from "../../actions/toggle-favorite-gif.js";

const styles = {
    dialogRoot: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 0
    },
    dialogContent: {
        position: "relative",
        width: "80vw",
        transform: "",
    },
    dialogBody: {
        padding: 0,
        backgroundColor: "#121212"
    }
};

class Gif extends Component {
    state = {
        isDetailedViewOpen: false,
        isLinkCopied: false,
        isGifInFavorites: false
    }

    handleOpen = () => {
        this.setState({ isDetailedViewOpen: true });
    };

    handleClose = () => {
        this.setState({ isDetailedViewOpen: false });
    };

    handleToggle = () => {
        const dataObject = {};
        const { data: { id }, data } = this.props;

        dataObject[id] = data;
        this.props.toggleFavoriteGif(dataObject);
    };

    onCopyToClipboardClick = () => {
        this.setState({ isLinkCopied: true }, () => {
            this.copyingMessage = setTimeout(() => {
                this.setState({ isLinkCopied: false }, () => {
                    clearTimeout(this.copyingMessage);
                })
            }, 3000);
        })
    }

    checkFavorites = (props) => {
        const { favorites, data: { id } } = props;
        
        if (favorites[id] && !this.state.isGifInFavorites) {
            this.setState({ isGifInFavorites: true });
        } else if (!favorites[id] && this.state.isGifInFavorites) {
            this.setState({ isGifInFavorites: false });
        }
    };

    componentDidMount() {
        this.checkFavorites(this.props);
    }

    shouldComponentUpdate(newProps, newState) {
        if (
            ( newProps.favorites[this.props.data.id] && !this.state.isGifInFavorites ) ||
            ( !newProps.favorites[this.props.data.id] && this.state.isGifInFavorites ) ||
            ( this.state.isDetailedViewOpen !== newState.isDetailedViewOpen ) ||
            ( this.state.isLinkCopied !== newState.isLinkCopied )
        ) {
            this.checkFavorites(newProps);
            return true;
        }

        return false;
    }

    componentWillUnmount() {
        if (this.copyingMessage) {
            clearTimeout(this.copyingMessage);
        }
    }    

    render() {
        const { images: { original, fixed_width }, rating, user } = this.props.data;

        return (
            <MuiThemeProvider>
                <div className='box'>
                    <div className='gif'>
                        <a onClick={this.handleOpen}>
                            <img src={fixed_width.gif_url} alt="Loading..." />
                        </a>
                    </div>

                    <Dialog
                        contentStyle={ styles.dialogContent }
                        bodyStyle={ styles.dialogBody }
                        style={ styles.dialogRoot }
                        repositionOnUpdate={ false }
                        open={this.state.isDetailedViewOpen}
                        autoDetectWindowHeight={true}
                        autoScrollBodyContent={true}
                        onRequestClose={this.handleClose}
                    >
                        <div className="popup__main">

                            <img src={original.gif_url} alt="Loading..." />
                            <div className="popup__box">

                                <div className="popup__box-list">
                                    <div className="popup__box-list-item">
                                        <FontAwesomeIcon icon="user" />
                                        <span>{ user && user.display_name !== "" ? user.display_name : "Anonymous" }</span>
                                    </div>

                                    <div className="popup__box-list-item">
                                        <FontAwesomeIcon icon="star" />
                                        <span>Rating: { rating.toUpperCase() }</span>
                                    </div>

                                    <div className={`popup__box-list-item fav${this.state.isGifInFavorites ? " isActive" : ""}`}>
                                        <a onClick={this.handleToggle}>
                                            <FontAwesomeIcon icon="heart" />
                                            <span>Favorites</span>
                                        </a>
                                    </div>

                                    <CopyToClipboard text={original.gif_url} className="popup__box-list-item clipboard"
                                      onCopy={this.onCopyToClipboardClick}>
                                        <span>
                                            <FontAwesomeIcon icon="link" />
                                            <span className="clipboard__txt">
                                                Copy Link
                                                {this.state.isLinkCopied ? <span className="clipboard__txt-msg">Copied.</span> : null}
                                            </span>                                            
                                        </span>
                                    </CopyToClipboard>
                                    
                                </div>

                                <div className="popup__box-btn">                                
                                    <FlatButton
                                        className="btn btn--cancel"
                                        label="Cancel"
                                        backgroundColor='#c9d6de'
                                        labelStyle={{color: "#121212"}}
                                        hoverColor='#52616a'
                                        primary={true}
                                        onClick={this.handleClose}
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="popup__footer"></div> 
                                          
                    </Dialog>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps({ favorites }) {
    return { favorites };
}

export default connect(mapStateToProps, { toggleFavoriteGif })(Gif)
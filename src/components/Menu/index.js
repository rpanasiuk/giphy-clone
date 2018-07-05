import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class BurgerMenu extends Component {
    state = {
        isMenuOpen: false
    }

    handleStateChange = (state) => {
        this.setState({isMenuOpen: state.menuOpen})  
    }

    closeMenu = () => {
        this.setState({isMenuOpen: false})
    }

    render () {
        return (
            <div className="menu">
                <Menu width={ 220 }
                    isOpen={this.state.isMenuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                    >
                    <Link onClick={this.closeMenu} className="menu__item menu__item--home" to="/">
                        <FontAwesomeIcon icon="home" /><span>Home</span>
                    </Link>
                    <Link onClick={this.closeMenu} className="menu__item menu__item--favorites" to="/favorites">
                        <FontAwesomeIcon icon="heart" /><span>Favorites</span>
                    </Link>
                    <a onClick={this.closeMenu} className="menu__item menu__item--upload" href="/upload">
                        <FontAwesomeIcon icon="upload" /><span>Upload</span>
                    </a>
                </Menu>
            </div>
        );
    }
}
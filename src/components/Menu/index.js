import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class BurgerMenu extends Component {
    showSettings = (event) => {
        event.preventDefault();
    }

    render () {
        return (
            <div className="menu">
                <Menu width={ 220 }>
                    <Link className="menu__item menu__item--home" to="/">
                        <FontAwesomeIcon icon="home" /><span>Home</span>
                    </Link>
                    <Link className="menu__item menu__item--favorites" to="/favorites">
                        <FontAwesomeIcon icon="heart" /><span>Favorites</span>
                    </Link>
                    <a className="menu__item menu__item--upload" href="/upload">
                        <FontAwesomeIcon icon="upload" /><span>Upload</span>
                    </a>
                </Menu>
            </div>
        );
    }
}
import React, { Component } from 'react';

import GifList from "../../components/GifList";

export default class Favorites extends Component {
	render() {
		return <GifList data={this.props.data} />
	}
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import GifList from "../../components/GifList";
import { fetchTrendingData, fetchData } from "../../actions/fetch-data.js";

class Main extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 400) &&
            !this.props.isRendering
        ) {
            const pageNumber = this.props.page;

            if (this.props.isFormFetchedData) {
                this.props.fetchData(this.props.searchInput, pageNumber);

            } else {
                this.props.fetchTrendingData(pageNumber); 
            }                 
        }
    }

    render() {
        return <GifList data={this.props.data} />
    }
}

const selector = formValueSelector('SearchBarForm');

export default connect(
    state => {
        const searchInput = selector(state, 'searchInput');
        const { page, isRendering, isFormFetchedData } = state;

        return { searchInput, page, isRendering, isFormFetchedData };
    },
    { fetchTrendingData, fetchData }
)(Main)
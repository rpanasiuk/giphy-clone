import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { fetchData } from "../../actions/fetch-data.js";

class SearchBar extends Component {

    renderField = (field) => {
        return (
            <div className="form__row">
                <div className="form__anim">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>

                <div className="form__input">
                    <label htmlFor={field.name}>{field.label}</label>
                    <input type="text" name="searchInput" id={field.name} {...field.input} />                    
                </div>

                 <div className="form__btn">
                    <button className="btn btn--submit"></button>
                </div>
            </div>
        );
    }

    onSubmit = (object) => {
        this.props.fetchData(object);
    }

    render() {
        return (
            <div className="navbar__form">
                <form className="form"  id="mainForm" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field
                        label="Search GIF"
                        name="searchInput"
                        component={this.renderField}
                    />                   
                </form>
            </div>
        );
    }
}

export default reduxForm({
    // validate,
    form: 'SearchBarForm'
})(
    connect(null, { fetchData })(SearchBar)
)
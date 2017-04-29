import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return ( 
                <form className="input-group" onSubmit={this.onFormSubmit}>
                    <input 
                        placeholder="Get 5-day forecast for your fav cities"
                        value={this.state.term} 
                        onChange={this.onInputChange} 
                        className="form-control"
                    />
                    <span className="input-grp-btn">
                        <button type="Submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
               );
    }
}
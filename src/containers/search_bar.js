import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};

        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        //console.log(event.target.value, event.type);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault();
        //fetch weather data here:(call the action creator)
        this.props.fetchWeather(this.state.term);
        this.setState({ term:' '});
    }

    render() {
           return(
          <form onSubmit={this.onFormSubmit} className="input-group">
               <input
                placeholder="Get a five-day forcast by city"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}/>
               <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button >
               </span>
            </form>
          );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

//null - placeholder for the first argument ("mapStateToProps")
export default connect(null, mapDispatchToProps)(SearchBar);

import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             searchString: ""
        }
    }

    searchInfo = (e) => {
        this.setState({
            searchString: e.target.value
        })
    }
    
    render() {
        return (
            <div className="form-group-lg m-3">
                <label htmlFor="formGroupExampleInput">Search any bank information</label>
                <input onKeyUp = {this.searchInfo} type="text" className="form-control"
                 id="formGroupExampleInput" placeholder="e.g. Bank Name" />
            </div>
        )
    }
}

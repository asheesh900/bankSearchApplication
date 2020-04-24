import React, { Component } from 'react'
import { connect } from 'react-redux'
import {filterInfo, createPages} from '../Redux/Action'

class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

        }
    }


    searchInfo = async(e) => {
        await this.props.filterInfo(e.target.value)
        this.props.createPages()
    }
    
    render() {
        return (
            <div className="form-group-lg m-3">
                <label htmlFor="formGroupExampleInput">Search any bank information</label>
                <input onChange = {this.handleChange} onKeyUp = {this.searchInfo} type="text" className="form-control"
                 id="formGroupExampleInput" placeholder="e.g. Bank Name" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    filterInfo: (searchString) => dispatch(filterInfo(searchString)),
    createPages: () => dispatch(createPages())
})

export default connect (mapStateToProps, mapDispatchToProps) (SearchBar)


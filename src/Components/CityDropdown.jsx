import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getBankDetails, filterInfo, createPages} from '../Redux/Action'

class CityDropdown extends Component {
    constructor(props) {
        super(props)

        this.searchString = React.createRef()
        
    }

    handleChange = async(e) => {
        this.resetSearch()
        let cityName = e.target.value
        await this.props.getBankDetails(cityName)
        this.props.createPages()
    }

    searchInfo = async() => {
        console.log(this.searchString.current.value)
        let searchKey = this.searchString.current.value
        await this.props.filterInfo(searchKey)
        this.props.createPages()
        
    }

    resetSearch = () => {
        this.searchString.current.value = ""
    }

    debounce = (fn, delay) => {
      let timerId
      return function() {
        clearTimeout(timerId)
        timerId = setTimeout(() => fn(), delay)
      }
    }
    
    render() {
        return (
          <>
            <div className="input-group m-3">
              <select
                onChange={this.handleChange}
                className="custom-select"
                id="inputGroupSelect02"
              >
                <option>Select a city...</option>
                <option value="DELHI">Delhi</option>
                <option value="MUMBAI">Mumbai</option>
                <option value="CHENNAI">Chennai</option>
                <option value="KOLKATA">Kolkata</option>
                <option value="UTTAR PRADESH">Uttar Pradesh</option>
              </select>
            </div>
            <div className="form-group-lg m-3">
              <label htmlFor="formGroupExampleInput">
                Search any bank information
              </label>
              <input
                onChange={this.debounce(this.searchInfo, 400)}
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="e.g. Bank Name"
                ref = {this.searchString}
              />
            </div>
          </>
        );
    }
}


const mapDispatchToProps = (dispatch) =>  ({
    getBankDetails: (cityName) => dispatch(getBankDetails(cityName)),
    filterInfo: (searchString) => dispatch(filterInfo(searchString)),
    createPages: () => dispatch(createPages())
})



export default connect(null, mapDispatchToProps)(CityDropdown)


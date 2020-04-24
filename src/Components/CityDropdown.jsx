import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getBankDetails} from '../Redux/Action'

class CityDropdown extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    handleChange = (e) => {
        let cityName = e.target.value
        this.props.getBankDetails(cityName)
    }
    
    render() {
        return (
            <div className="input-group m-3">
            <select onChange = {this.handleChange} className="custom-select" id="inputGroupSelect02">
                <option >Select a city...</option>
                <option value="DELHI">Delhi</option>
                <option value="MUMBAI">Mumbai</option>
                <option value="CHENNAI">Chennai</option>
                <option value="KOLKATA">Kolkata</option>
                <option value="HYDERABAD">Hyderabad</option>
            </select>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) =>  ({
    getBankDetails: (cityName) => dispatch(getBankDetails(cityName))
})

export default connect(mapStateToProps, mapDispatchToProps)(CityDropdown)


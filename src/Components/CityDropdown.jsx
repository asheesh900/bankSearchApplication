import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getBankDetails, createPages} from '../Redux/Action'

class CityDropdown extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    handleChange = async(e) => {
        let cityName = e.target.value
        await this.props.getBankDetails(cityName)
        this.props.createPages()
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
    isData: state.isData
})

const mapDispatchToProps = (dispatch) =>  ({
    getBankDetails: (cityName) => dispatch(getBankDetails(cityName)),
    createPages: () => dispatch(createPages())
})



export default connect(mapStateToProps, mapDispatchToProps)(CityDropdown)


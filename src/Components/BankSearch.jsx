import React, { Component } from 'react'
import CityDropdown from './CityDropdown'
import SearchBar from './SearchBar'
import InfoTable from './InfoTable'
import Pagination from './Pagination'
// import '../App.css'


export default class BankSearch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className = "container-fluid ">
                <div className="container">
                    <h1>Bank Search Page</h1>
                    <CityDropdown />
                    <SearchBar />
                <div className = "displayTable">
                        <InfoTable />
                </div>
                <div className ="justify-content-center row">
                    <Pagination />
                </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import CityDropdown from './CityDropdown'
import SearchBar from './SearchBar'
import InfoTable from './InfoTable'
import Pagination from './Pagination'
import FavouriteBanks from './FavouriteBanks'
// import '../App.css'


export default class BankSearch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             favBank: []
        }
    }

    componentDidMount = () => {
        let fav = JSON.parse(localStorage.getItem("favBank"))
        if(fav) {
            this.setState({
                favBank: [...fav]
           })
        }
    }

    getFavourite = () => {
        let fav = JSON.parse(localStorage.getItem("favBank"))
        if(fav) {
            this.setState({
                favBank: [...fav]
           })
        }
    }
    
    render() {
        return (
            <div className = "container-fluid ">
                <div className="container-fluid">
                    <h1 className = "text-center">Bank Search Application</h1>
                    <CityDropdown />
                    <SearchBar />
                    <div className="row">
                        <div className = "displayTable col-9">
                            <h1>All Banks</h1>
                            <InfoTable />
                        </div>
                        <div className = "displayTable col-3">
                            <h1>Favourite Banks</h1>
                            <button onClick = {this.getFavourite} type="button" className="btn btn-primary btn-lg btn-block m-2">Show favourite banks</button>
                            <FavouriteBanks favBank = {this.state.favBank} />  
                        </div>
                    </div>
                    <div className ="justify-content-center row">
                        <Pagination />
                    </div>
                </div>
            </div>
        )
    }
}

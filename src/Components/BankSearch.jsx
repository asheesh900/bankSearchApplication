import React, { Component } from 'react'
import CityDropdown from './CityDropdown'
import InfoTable from './InfoTable'
import Pagination from './Pagination'
import FavouriteBanks from './FavouriteBanks'
import { connect } from 'react-redux'
// import '../App.css'


class BankSearch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             favBank: [],
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
        let {isRequest} = this.props
        console.log(isRequest)
        return (
            <div className = "container-fluid ">
                <div className="container-fluid">
                    <h1 className = "text-center">Bank Search Application</h1>
                    <CityDropdown />
                    <div className="row">
                        <div className = "displayTable col-9">
                            {
                                isRequest ? (<InfoTable getFavourite = {this.getFavourite} />) : (<h1>Welcome to the bank database.</h1>)
                            }
                            
                        </div>
                        <div className = "displayTable col-3">
                            <h1>Favourite Banks</h1>
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

const mapStateToProps = (state) => ({
    isRequest: state.isRequest,
})

const mapDispatchToProps = (dispatch) =>  ({
    
})

export default connect (mapStateToProps, null) (BankSearch)


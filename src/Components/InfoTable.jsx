import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class InfoTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

        }
    }

    markItem = (e) => {
        // console.log(e.target.value)
        let markedItem = e.target.value
        var item = JSON.parse(markedItem)

        let fav = localStorage.getItem("favBank")
        if(fav) {
            fav = JSON.parse(fav)
            console.log(fav)
            for(var i=0; i<fav.length; i++) {

                if(fav[i]["ifsc"] === item["ifsc"]) {
                    alert("Already favourite")
                    break;
                }
            }
            if(i === fav.length) {
                fav.push(item)
                localStorage.setItem("favBank", JSON.stringify(fav))
                alert("marked favourite")

            }

        } else {
            let fav = []
            fav.push(item)
            localStorage.setItem("favBank", JSON.stringify(fav))
            alert("marked favourite")
        }

        this.props.getFavourite()

    }

    
    render() {
        const {temp, isLoading, perPage, pageDuplicate} = this.props
        let count = 1
        return (
            isLoading ?
            ( 
                <Loader
                    className = "text-center"
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
            
                />
            ):
            (
            <>
                <h1>All Banks</h1>
                <table className="table table-striped table-dark table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Bank Name</th>
                            <th scope="col">Branch</th>
                            <th scope="col">IFSC</th>
                            <th scope="col">District</th>
                            <th scope="col">State</th>
                            <th scope="col">Address</th>
                            <th scope="col">Mark Favourite</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            temp.filter((a, i) => {
                              return i >= perPage * (pageDuplicate - 1) && i < perPage * pageDuplicate
                            }).map(ele => {
                                return (
                                    <tr key = {ele.ifsc}>
                                        <th scope="row">{count++} </th>
                                        <td>{ele.bank_name} </td>
                                        <td>{ele.branch} </td>
                                        <td>{ele.ifsc} </td>
                                        <td>{ele.district} </td>
                                        <td>{ele.state} </td>
                                        <td>{ele.address} </td>
                                        <td><button value = {JSON.stringify(ele)} onClick = {(e) => this.markItem(e)}>Mark Favourite</button> </td>
                                        {/* stringifying above object to get the we can 
                                            get the value using e.target.value and parsing it.
                                             Just check what happens without it. */}
                                    </tr>
                                )
                            })
                                
                        }

                    </tbody>
                </table>
            </>  
            )
            
            
        )
    }
}

const mapStateToProps = (state) => ({
    temp: state.temp,
    banks: state.banks,
    isLoading: state.isLoading,
    isData: state.isData,
    perPage: state.perPage,
    pageDuplicate: state.page,
})


export default connect (mapStateToProps, null) (InfoTable)

import React, { Component } from 'react'
import { connect } from 'react-redux'

class InfoTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

        }
    }

    markItem = (e) => {
        let markedItem = e.target.value

        // console.log(markedItem)
        let fav = localStorage.getItem("favBank")
        var item = JSON.parse(markedItem)
        if(fav) {
            fav = JSON.parse(fav)
            if(fav.indexOf(item) === -1) {
                fav.push(item)
                localStorage.setItem("favBank", JSON.stringify(fav))
            }
        } else {
            localStorage.setItem("favBank", JSON.stringify([item]))
        }

    }

    
    render() {
        const {temp, ifData, perPage, pageDuplicate} = this.props
        let count = 1
        return (
            ifData ?
            (
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
                                    </tr>
                                )
                            })
                                
                        }

                    </tbody>
                </table>
                
            ):
            (
                <div>
                    <h1>Data is loading...</h1>
                </div>
            )
            
        )
    }
}

const mapStateToProps = (state) => ({
    temp: state.temp,
    banks: state.banks,
    ifData: state.ifData,
    perPage: state.perPage,
    pageDuplicate: state.page,
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect (mapStateToProps, mapDispatchToProps) (InfoTable)

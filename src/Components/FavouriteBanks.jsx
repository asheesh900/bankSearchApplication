import React, { Component } from 'react'

export default class FavouriteBanks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }

    
    render() {
        const {favBank} = this.props
        return (
            <div>
                <table className="table table-dark table-responsive">
                    <thead>
                        <tr>
                        <th scope="col">Bank Name</th>
                        <th scope="col">Branch</th>
                        <th scope="col">IFSC</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           favBank && favBank.map((ele, i) => {
                                return (
                                    <tr key = {i}>
                                        <td>{ele.bank_name} </td>
                                        <td>{ele.branch} </td>
                                        <td>{ele.ifsc} </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

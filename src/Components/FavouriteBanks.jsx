import React, { Component } from 'react'

export default class FavouriteBanks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             favBank: []
        }
    }

    
    render() {
        const {favBank} = this.props
        return (
            <div>
                <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Bank Name</th>
                        <th scope="col">Branch</th>
                        <th scope="col">IFSC</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           favBank && favBank.map(ele => {
                                return (
                                    <tr>
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

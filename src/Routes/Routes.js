import React, { Component } from 'react'
import BankSearch from '../Components/BankSearch'
import {Link, Route} from 'react-router-dom'

export default class Routes extends Component {
    render() {
        return (
            <>
                <div>
                    <Link to = "/"></Link>
                </div>

                <div>
                    <Route path = "/" component = {BankSearch} />
                </div>
            </>
        )
    }
}

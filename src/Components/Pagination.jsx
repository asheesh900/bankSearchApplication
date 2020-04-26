import React, { Component } from 'react'
import {changePage} from '../Redux/Action'
import {connect} from 'react-redux'

class Pagination extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {page, perPage, totalPages} = this.props
        // console.log(page, perPage, totalPages)

        let pageList = []
        for(let i=page-1; i>=0 && i<=page+3 && i<=Math.ceil(totalPages); i++) {

            // previous page append

            if(i === page - 1) {
                if(i !== 0) 
                    pageList.push(
                        <li key = {i} onClick = {() => this.props.changePage(page - 1)} className="page-link">Prev</li>
                    );
                continue;
            }
            
            // next page append
            
            if(i === page + 3) {
                pageList.push(
                    <li key = {i} onClick = {() => this.props.changePage(page + 1)} className="page-link">Next</li>
                    );
                continue;
                }


            // middle pages

            pageList.push(
                <li key = {i} onClick = {() => this.props.changePage(page + 1)} className="page-link">{i} </li>
            )
        }
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                      totalPages !== 0 && pageList.map(ele => ele)
                    }
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page,
    perPage: state.perPage,
    totalPages: state.totalPages,
})

const mapDispatchToProps = (dispatch) =>  ({
    changePage: (payload) => dispatch(changePage(payload))
})

export default connect (mapStateToProps, mapDispatchToProps) (Pagination)


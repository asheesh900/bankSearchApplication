import {
    FETCH_BANKDETAILS_REQUEST,
    FETCH_BANKDETAILS_SUCCESS,
    FETCH_BANKDETAILS_FAILURE,
    FILTER_BANKDETAILS,
    CHANGE_PAGE_NO,
    CREATE_PAGES
} from './Action'

const initialState = {
    banks: [],
    temp: [],
    isData: false,
    isLoading: false,
    error: "",
    perPage: 10,
    page: 1,
    totalPages: 0,
    length: 0,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BANKDETAILS_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_BANKDETAILS_SUCCESS:
            return {
                ...state,
                ifData: true,
                banks: action.data,
                temp: action.data,
            }

        case FETCH_BANKDETAILS_FAILURE:
            return {
                isLoading: false,
                error: action.error
            }

        case FILTER_BANKDETAILS:
            let query = action.payload.toLowerCase()
            let arr = state.banks.filter((ele) => {
                if(ele.bank_name.toLowerCase().includes(query) || ele.branch.toLowerCase().includes(query)
                || ele.district.toLowerCase().includes(query) || ele.ifsc.toLowerCase().includes(query)
                || ele.state.toLowerCase().includes(query) || ele.address.toLowerCase().includes(query)) {
                    return ele
                }
            })
            console.log(query, arr, )

            return {
                ...state,
                temp: [...arr],
                totalPages: Math.ceil(arr.length / 10)
            }

        case CHANGE_PAGE_NO:
            return {
                ...state,
                page: action.payload
            }

        case CREATE_PAGES:
            if(state.temp.length !== 0) {
                return {
                    ...state,
                    length: state.temp.length,
                    totalPages: Math.ceil(state.temp.length / 10)
                    
                }
            } else {
                return {
                    ...state,
                    length: state.banks.length,
                    totalPages: Math.ceil(state.banks.length / 10)
                }
            }

        default:
            return state
    }
}

export default reducer
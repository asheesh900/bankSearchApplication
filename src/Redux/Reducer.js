import {
    FETCH_BANKDETAILS_REQUEST,
    FETCH_BANKDETAILS_SUCCESS,
    FETCH_BANKDETAILS_FAILURE
} from './Action'

const initialState = {
    banks: [],
    isData: false,
    isLoading: false,
    error: ""
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
                ifData: true,
                banks: action.data
            }

        case FETCH_BANKDETAILS_FAILURE:
            return {
                isLoading: false,
                error: action.error
            }

        default:
            return state
    }
}

export default reducer
import axios from 'axios'

// actions

export const FETCH_BANKDETAILS_REQUEST = "FETCH_BANKDETAILS_REQUEST"
export const FETCH_BANKDETAILS_SUCCESS = "FETCH_BANKDETAILS_SUCCESS"
export const FETCH_BANKDETAILS_FAILURE = "FETCH_BANKDETAILS_FAILURE"
export const FILTER_BANKDETAILS = "FILTER_BANKDETAILS"
export const CHANGE_PAGE_NO = "CHANGE_PAGE_NO"
export const CREATE_PAGES = "CREATE_PAGES"

// action creators

export const bankDetailsRequest = () => {
    return {
        type: FETCH_BANKDETAILS_REQUEST
    }
}

export const bankDetailsSuccess = data => {
    return {
        type: FETCH_BANKDETAILS_SUCCESS,
        data: data
    }
}

export const bankDeatailsFailure = error => {
    return {
        type: FETCH_BANKDETAILS_FAILURE,
        error: error
    }
}

// action to fetch the data

export const getBankDetails = (cityName) => {
    let url = `https://vast-shore-74260.herokuapp.com/banks?city=${cityName}`
    return dispatch => {
        dispatch(bankDetailsRequest())
        return axios
            .get(url)
            .then(res => {
                // console.log(res.data)
                return dispatch(bankDetailsSuccess(res.data))
            })
            .catch(err => {
                return dispatch(bankDeatailsFailure(err))
            })
    }
}

// action to filter data

export const filterInfo = (searchString) => {
    return {
        type: FILTER_BANKDETAILS,
        payload: searchString
    }
}

// action to change page number

export const changePage = (payload) => {
    return {
        type: CHANGE_PAGE_NO,
        payload
    }
}

export const createPages = () => {
    return {
        type: CREATE_PAGES
    }
}
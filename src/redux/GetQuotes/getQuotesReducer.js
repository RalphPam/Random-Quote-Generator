import { GET_QUOTES_REQUEST, GET_QUOTES_SUCCESS, GET_QUOTES_FAILURE} from './getQuotesType'

const inititalState = {
    loading: false,
    quotes: [],
    error: ''
}

export const getQuotesReducer = (state =inititalState, action) => {
    switch(action.type) {
        case GET_QUOTES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_QUOTES_SUCCESS: 
            return {
                loading: false,
                quotes: action.quotes,
                error: ''
            }
        case GET_QUOTES_FAILURE:
            return {
                loading: false,
                quotes: [],
                error: action.error
            }
        default: return state
    }
}

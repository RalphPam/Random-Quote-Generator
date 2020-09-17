import { GET_QUOTES_REQUEST, GET_QUOTES_SUCCESS, GET_QUOTES_FAILURE} from './getQuotesType'
import axios from 'axios'
import { randomQuote } from '../RandomQuoteGen/randomQuoteAction'

const getQuotesRequest = () => {
    return {
        type: GET_QUOTES_REQUEST
    }
}

const getQuotesSuccess = quotes => {
    return {
        type: GET_QUOTES_SUCCESS,
        quotes
    }
}

const getQuotesFailure = error => {
    return {
        type: GET_QUOTES_FAILURE,
        error
    }
}

export const getQuotes = () => {
    return dispatch => {
        dispatch(getQuotesRequest())
        axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(response => {
                dispatch(getQuotesSuccess(response.data.quotes))
                dispatch(randomQuote(Math.floor(Math.random() * response.data.quotes.length)))
            })
            .catch(error => dispatch(getQuotesFailure(error.message)))
    }
}
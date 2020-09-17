import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {randomQuoteReducer} from './RandomQuoteGen/randomQuoteReducer'
import {getQuotesReducer} from './GetQuotes/getQuotesReducer'

const rootReducer = combineReducers({
    random: randomQuoteReducer,
    quotes: getQuotesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk,logger)) 
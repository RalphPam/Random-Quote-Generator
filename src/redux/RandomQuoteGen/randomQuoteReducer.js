import { RANDOM_QUOTE,RESET_ANIMATION } from './randomQuoteType'

const initialState = {
    index: 0,
    color: '',
    animation: false
}

export const randomQuoteReducer = (state = initialState, action) => {
    switch(action.type) {
        case RANDOM_QUOTE: 
            const randomColor = ['#1e5f74','#2ec1ac','#fe7171','#ffc93c','#335d2d','#515070','#ff5722','#900d0d','#07031a']
            return {
                index: action.index,
                color: randomColor[Math.floor(Math.random() * randomColor.length)],
                animation: true
            }
        case RESET_ANIMATION:
            return {
                ...state,
                animation: false
            }
        default: return state
    }
}   
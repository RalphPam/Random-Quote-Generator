import { RANDOM_QUOTE, RESET_ANIMATION} from './randomQuoteType'

export const randomQuote = (index) => {
    return {
        type: RANDOM_QUOTE,
        index
    }
}

export const resetAnimation = () => {
    return {
        type: RESET_ANIMATION
    }
}
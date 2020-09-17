import React, { useEffect } from 'react'
import { getQuotes } from '../redux/GetQuotes/getQuotesAction'
import { connect } from 'react-redux'
import { randomQuote, resetAnimation } from '../redux/RandomQuoteGen/randomQuoteAction'

function QuoteContainer(props) {
    useEffect(props.getQuotes, [])
    const obj = {...props.quotes[props.index]}
    const styleContainer = {
        width: '100%',
        transition: 'background-color ease-in 1s'
    }
    const logoStyle = {
        transition: 'color ease-in 1s'
    }
    return (
        <div style={{...styleContainer, backgroundColor: props.color}}>
            <div className='quoteContainer'>
                <div className={props.animation ? 'containerAnimation' : 'container'} onAnimationEnd={() => props.resetAnimation()}>
                    <div className={props.animation ? 'textContainerAnimation' : ''}>
                        <blockquote style={{...logoStyle, color: props.color}}>
                            {props.loading ? 
                                'Loading...' 
                                : <div>
                                    <span className='quotationMarks'>{'"'}</span>{obj.quote}<span className='quotationMarks'>{'"'}</span>
                                </div>}
                            <div className='authorContainer'>
                                <cite>-{obj.author}</cite>
                            </div>
                        </blockquote>
                        <div className='buttonContainer'>
                            <div className='logoContainer'>
                                <a href='https://twitter.com/intent/tweet'>
                                    <i className="fab fa-twitter-square" style={{...logoStyle, color: props.color}}></i>
                                </a>
                                <a href='https://www.facebook.com/dialog/share'>
                                    <i className="fab fa-facebook-square" style={{...logoStyle, color: props.color}}></i>
                                </a>
                            </div>
                            <button 
                                onClick={() => {
                                props.randomQuote(Math.floor(Math.random() * props.quotes.length))
                                }}
                                style={{...styleContainer, backgroundColor: props.color}}
                            >New Quote</button>
                        </div>
                    </div>
                </div>
                <h3 className='design'>Designed and Coded by Ralph P.</h3>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quotes: state.quotes.quotes,
        index: state.random.index,
        color: state.random.color,
        animation: state.random.animation,
        loading: state.quotes.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getQuotes: () => dispatch(getQuotes()),
        randomQuote: index => dispatch(randomQuote(index)),
        resetAnimation: () => dispatch(resetAnimation())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteContainer)

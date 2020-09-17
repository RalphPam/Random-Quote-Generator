import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import QuoteContainer from './Components/QuoteContainer'

function App() {
  return (
    <Provider store = {store}>
      <div>
        <QuoteContainer />
      </div>
    </Provider>
  )
}

export default App

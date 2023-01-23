import { useState } from 'react'
import './App.css'
import QuotesBox from './components/QuotesBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'

function App() {

  const randomElementFromArray = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  const [quoteRandom, setQuoteRandom] = useState(randomElementFromArray(quotes))
  const [colorRandom, setColorRandom] = useState(randomElementFromArray(colors))

  const handleClick = () => {
    setQuoteRandom(randomElementFromArray(quotes))
    setColorRandom(randomElementFromArray(colors))
  }

  return (
    <div style={ {backgroundColor: colorRandom}} className="App">
      <QuotesBox 
      quoteRandom ={quoteRandom} 
      handleclick ={handleClick}
      colorRandom ={colorRandom}
      />
    </div>
  )
}

export default App

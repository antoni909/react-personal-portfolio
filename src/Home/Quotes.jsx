import { useState, useEffect } from 'react'
import useStyles from '../Theme/themes'

const Quotes = () => {
 
  const classes = useStyles();
  const [quote,setQuote] = useState([])
  const randomIdx = (min,max) => Math.floor(Math.random()*(max-min+1)+min)
  
  useEffect(()=>{
    const getProgrammerQuote = () => {
      fetch(process.env.REACT_APP_QUOTES_API)
        .then( res => {
          if(!res.ok) console.error('err',res)
          return res.json()
        }).then(res => {
          const idx = randomIdx(0,res.length)
          setQuote([{...res[idx]}])}
          )
    }
    getProgrammerQuote()
  },[])

  return (
    <>
      {
        quote
          ? quote.map(item => (
            <div
              className={classes.aboutQuoteContainer}
              key={item.text}
            >
              <h3 className={classes.aboutQuote}>"{item.text}"</h3>
              <h5 className={classes.aboutQuote}>{`- ${item.author}`}</h5>
            </div>
          ))
          : null
      }
    </>
  )
}

export default Quotes

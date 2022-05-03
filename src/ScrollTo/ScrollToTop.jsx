import { useEffect, useState } from 'react'
import useStyles from '../Theme/themes'

import { FaChevronCircleUp } from 'react-icons/fa';

// DONE: button must remain Fixed on the screen
// DONE: fix Scroll Button visibility
const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false)
  const classes = useStyles();
  const scrollEventHandler = () => {
    window.addEventListener('scroll', ()=> {
      if(window.pageYOffset > 100) setShowScroll(true)
      if(window.pageYOffset < 100) setShowScroll(false)
    })
  }
  const scrollToTop = () => window.scrollTo({ top:0,behavior:'smooth' })

  useEffect( () => { scrollEventHandler() },[])

  return (
    <div 
      className={ classes.scrollButton } 
    >
      {showScroll
        ?<FaChevronCircleUp 
            onClick={() => scrollToTop() }
          > top 
          </FaChevronCircleUp>
        : null
      } 
    </div>
  )

}

export default ScrollToTop;

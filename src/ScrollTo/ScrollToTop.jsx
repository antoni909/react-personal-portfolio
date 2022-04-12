import { useStyles } from '../Theme/theme'
import Button from '@mui/material/Button';

const ScrollToTop = () => {

  const classes = useStyles();
  const scrollToTop = () => window.scrollTo({top:0,behavior:'smooth'})

  return (
    <Button 
      className={classes.Button}
      color="primary"
      onClick={() => scrollToTop() }
      size="medium"
      variant="contained"
    > top 
    </Button>
  )


}

export default ScrollToTop;

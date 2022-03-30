import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles( theme => ({
  button: {
    fontSize: 25,
    width: 11,
    borderRadius: 10,
    boxShadow: '1px 1px 1px 1px rgba(30, 203, 243, .3)',
    '&:hover':{
      backgroundColor: '#f50057'
    },
    marginTop: '10px', 
  },
  root: {
    flexGrow: 1,
  },
}
));

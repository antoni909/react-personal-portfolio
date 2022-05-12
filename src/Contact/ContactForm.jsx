import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useStyles from '../Theme/themes'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ContactForm = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const clearFields = () => {
    setName('')
    setEmail('')
    setMessage('')
    setEmailSent(true);
   }

  const  handleSubmit = () => { (name && email && message)
      ? clearFields()
      : alert('Not So Fast! Please Fill All Fields')
  }
  return(
    <Box className={classes.contactBackground}>
      <Box className={classes.contactContainer}>
      <h1 className={classes.contactTitle}>Get In Touch, Don't Be Shy</h1>
      <Box 
        autoComplete="on"
        className={classes.formContainer}
        component='form'
        >
        <div className={classes.formGroup}>
          <TextField
            label="Name"
            type="text"
            onChange={ e => setName(e.target.value) } 
            required
          />
          <TextField
            label="Email"
            type="email"
            onChange={ e => setEmail(e.target.value) } 
            required
          />
          <TextField
            type="text"
            label="Message"
            multiline
            onChange={ e => setMessage(e.target.value) }
            required
            maxRows={ 10 }
          />
        </div>
        <div className={classes.formButtonContainer}>
          {!emailSent
            ?<button 
              className={classes.formButton}
              onClick={ handleSubmit }
              >Send</button>
            : null
          }
          {
            emailSent 
              ?<p className={classes.formSentMessage}>
                Thanks for reaching out, I will reply as soon as possible! 
                </p>
              :null
          }
        </div>
      </Box>

      <Button 
            className={classes.Button}
            color="primary"
            onClick={() => navigate('/') }
            size="medium"
            variant="contained"
          > home 
      </Button>
      </Box>
    </Box>
  )
}

export default ContactForm

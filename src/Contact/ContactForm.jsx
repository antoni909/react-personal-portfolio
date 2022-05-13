import { useState } from 'react'
import useStyles from '../Theme/themes'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const  classes =  useStyles();
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

  const  handleSubmit = () => { 
    (name && email && message)
      ? clearFields()
      : alert('Not So Fast! Please Fill All Fields')

      let templateParams = {
        name,
        email,
        message
      }
      console.log('templateParams',templateParams)
      emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID, 
        templateParams, 
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });

  }
  return(
    <Box className={ classes.contactBackground }>
      <Box className={ classes.contactContainer }>
        <h1 className={ classes.contactTitle }>Get In Touch, Don't Be Shy .</h1>
        <Paper 
          elevation={ emailSent? 2:15 }
        >
          <Box 
            autoComplete="on"
            className={ classes.formContainer }
            component='form'
            >
            <div className={ classes.formGroup }>
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
            <div className={ classes.formButtonContainer }>
              {!emailSent
                ?<button 
                  className={ classes.formButton }
                  onClick={ handleSubmit }
                  >Send</button>
                : null
              }
              {
                emailSent 
                  ?<p className={ classes.formSentMessage }>
                    Thanks for reaching out, I will reply as soon as possible! 
                    </p>
                  :null
              }
            </div>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}

export default ContactForm

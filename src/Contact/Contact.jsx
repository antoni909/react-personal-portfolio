import { forwardRef } from 'react'
import ContactForm from './ContactForm'

const Contact = forwardRef((props,contactRef) => {

  return (
    <div
      id="contact"
      ref={ contactRef }
    >
      <ContactForm/>
    </div>
  );
})

export default Contact;

import React, {useRef} from 'react';

import './Contact.css'

const Contact = props => {
  const [messageStatus, setMessageStatus] = React.useState(false)
  const form = useRef(null)

  const close_popup = () => {
    setMessageStatus(false) 
  }


  const sendMessage = event => {
    event.preventDefault()
    const data = new FormData(form.current)
    fetch('http://localhost:8000/api/sendMessage/', { method: 'POST', body: data })
      .then(function (response){
        if (response.status === 200) {
          setMessageStatus(true)
          setTimeout(() => {
            setMessageStatus(false)
          }, 5000)
        }
      })
  }

  return (
    <div className='contact'>
      <div className={messageStatus ? 'contact__popup': 'contact__none'}>
        <h3>Success <strong onClick={close_popup}>&times;</strong></h3>
        <p>Your message was sent. I will reply soon</p>
      </div>
      <div className='contact__info'>
        <h1>Contact</h1>
        <p>You can write whatever you want here.</p>
        <div className="contact__info_email">
          <h3>Email</h3>
          <p>maximsheleh@gmail.com</p>
        </div>
      </div>
      <div className='contact__form'>
        <form ref={form} onSubmit={sendMessage}>
          <div className='contact__form_unit'>
            <div className='contact__form_input'>
              <label>First name</label>
              <input name="first_name" type='fname' />
            </div>
            <div className='contact__form_input'>
              <label>Last name</label>
              <input name="last_name" type='lname' />
            </div>
          </div>

          <div className='contact__form_unit'>
            <div className='contact__form_input'>
              <label>Email</label>
              <input name="email" type='email' />
            </div>
            <div className='contact__form_input'>
              <label>Subject</label>
              <input name="subject" type='text' />
            </div>
          </div>
          <div className='contact__form_textarea'>
              <label>Message</label>
              <textarea name="message" rows="8" type='text'></textarea>
          </div>
          <button type='submit' value='Submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';

import './Contact.css'

const Contact = props => {
  return (
    <div className='contact'>
      <div className='contact__info'>
        <h1>Contact</h1>
        <p>You can write whatever you want here.</p>
        <div className="contact__info_email">
          <h3>Email</h3>
          <p>maximsheleh@gmail.com</p>
        </div>
      </div>
      <div className='contact__form'>
        <form>
          <div className='contact__form_unit'>
            <div className='contact__form_input'>
              <label>First name</label>
              <input type='fname' />
            </div>
            <div className='contact__form_input'>
              <label>Last name</label>
              <input type='lname' />
            </div>
          </div>

          <div className='contact__form_unit'>
            <div className='contact__form_input'>
              <label>Email</label>
              <input type='email' />
            </div>
            <div className='contact__form_input'>
              <label>Subject</label>
              <input type='text' />
            </div>
          </div>
          <div className='contact__form_textarea'>
              <label>Message</label>
              <textarea rows="8" name="text"></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
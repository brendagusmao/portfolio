import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {MdAlternateEmail, MdEditSquare} from 'react-icons/md';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import '../styles/utils.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xknavrgd");
  const [phoneNumber, setPhoneNumber] = useState('');

  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumber;
  }
  
  const handlePhoneNumberChange = (event) => {
      const formattedNumber = formatPhoneNumber(event.target.value);
      setPhoneNumber(formattedNumber);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>

      <label htmlFor="nome">
      <i> <CgProfile /></i>
        Your Name
      </label>
      <input
        id="nome"
        type="text" 
        name="nome"
        placeholder=" Brenda Pereira Gusmão"
        required
      />

      <label htmlFor="telephone">
      <i> <BsFillTelephoneFill /></i>
        Telephone Number (Optional)</label>
      <input type="text" name="telephone" id="telephone" placeholder="(31) 9 99999999" value={ phoneNumber }
        onChange={handlePhoneNumberChange} />

      <label htmlFor="email">
       <i> <MdAlternateEmail /></i>
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="exemple@email.com"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />


      <label htmlFor="message">
        <i><MdEditSquare /></i>
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required=""
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />


      <button type="submit" disabled={state.submitting} className="buttom">
        Submit
      </button>
    </form>
    </div>
  );
}

function Forms() {
  return (
    <ContactForm />
  );
}
export default Forms;
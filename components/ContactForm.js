import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [purpose, setPurpose] = useState('');
  const [err, setErr] = useState(null);
  const [msg, setMsg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      'name:',
      name,
      'email:',
      email,
      'date:',
      date,
      'message:',
      message,
      'purpose:',
      purpose
    );

    axios
      .post('https://photobucket-contactus.herokuapp.com/contact/create', {
        name: name,
        email: email,
        date: date,
        message: message,
        purpose: purpose,
      })
      .then((res) => {
        console.log('This is the for submission res >>>', res.data.message);
        setMsg(res.data.message);
      })
      .catch((err) => {
        setErr(err.response.data);
        console.log('foem submission error >>>>>', err);
      });
  };
  return (
    <form
      name='contact'
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className='row'>
        <div className='form-group col-md-6'>
          <input
            type='text'
            required
            name='name'
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
            id='cl'
            placeholder='Your name'
            autoComplete='off'
          />
        </div>
        <div className='form-group col-md-6'>
          <input
            type='email'
            name='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'
            placeholder='Email address'
            autoComplete='off'
          />
        </div>
        <div className='form-group col-md-12'>
          <input
            type='text'
            name='date'
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='form-control'
            placeholder='wedding date'
          />
        </div>

        <div className='form-group col-md-12'>
          <input
            type='text'
            name='purpose'
            value={purpose}
            required
            onChange={(e) => setPurpose(e.target.value)}
            className='form-control'
            placeholder='purpose'
          />
        </div>
        <div className='form-group col-md-12'>
          <textarea
            name='message'
            className='form-control'
            value={message}
            required
            id='message'
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Your message'
          />
        </div>
        {msg ? <p style={{ color: 'green' }}>{msg}</p> : null}
        {err ? <p style={{ color: 'red', fontSize: 15 }}>{err}</p> : null}

        <div className='col-md-12'>
          <div className='ms-button'>
            Send
            <input type='submit' value='send' />
          </div>
          <p id='my-status-form'></p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs){
  const errors = {};
  if(!inputs.name){
    errors.name = 'Se requiere un nombre'
  }
  if(!regexEmail.test(inputs.email)){
    errors.email = 'Debe ser un correo electrónico'
  }
  if(inputs.phone < 0){
    errors.phone = 'Sólo números positivos'
  }
  if(!inputs.subject){
    errors.subject = 'Se requiere un asunto'
  }
  if(!inputs.message){
    errors.message = 'Se requiere un mensaje'
  }
  return errors;
}

export default function Contact () {

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    phone: 0,
    subject: '',
    message: ''
  });

  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  function handleChange(event){
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
    setErrors(validate({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(!Object.keys(errors).length){
      alert('Datos completos');
      setErrors({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '' 
      });
      setInputs({
        name: '',
        email: '',
        phone: 0,
        subject: '',
        message: ''
      })
    }else {
      alert('Debe llenar todos los campos')
    }
  }


  return <div>
  Crear Formulario
  <form  onSubmit={handleSubmit}>
    <label>Nombre:</label>
    <input className={errors.name && 'warning'} onChange={handleChange} value={inputs.name} name='name' placeholder='Escribe tu nombre...' type="text"></input>
    {errors.name && <p className='danger'>{errors.name}</p>}
    <label>Correo Electrónico:</label>
    <input  className={errors.email && 'warning'} onChange={handleChange} value={inputs.email} name='email' placeholder='Escribe tu email...' type='text'></input>
    {errors.name && <p className='danger'>{errors.email}</p>}
    <label>Teléfono:</label>
    <input className={errors.phone && 'warning'} onChange={handleChange} value={inputs.phone} name='phone' placeholder='Escribe un teléfono...' type='number'></input>
    {errors.name && <p className='danger'>{errors.phone}</p>}
    <label>Asunto:</label>
    <input className={errors.subject && 'warning'} onChange={handleChange} value={inputs.subject} name='subject' placeholder='Escribe el asunto...' type='text'></input>
    {errors.name && <p className='danger'>{errors.subject}</p>}
    <label>Mensaje:</label>
    <textarea className={errors.message && 'warning'} onChange={handleChange} value={inputs.message} name='message' placeholder='Escribe tu mensaje...' type="text"></textarea>
    {errors.name && <p className='danger'>{errors.message}</p>}
    <button type='submit'>Enviar</button>
  </form>
  </div>
}

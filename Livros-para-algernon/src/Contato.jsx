import './Contato.css'
import './buttons.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contato() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function enviaEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os campos')
      return;
    }
    const templateParams = {
      name: name,
      message: message,
      email: email
    }
    emailjs.send('service_o36mc3n', 'template_ckufcqk', templateParams, 'tPBKEpTq0rD7wLTMH').then((response) => {
      console.log('Email enviado', response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log('ERRO: ', err)
    })
  }

  return (
    <div className='containerContato'>
      <div className='boxContato'>
        <h1>Contato: </h1>
        <form onSubmit={enviaEmail} >
          <label htmlFor="nome"><h3>
            Nome:</h3>
          </label>
          <input id='nome'
            type="text"
            placeholder='Nome'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="email"><h3>Endereço de e-mail:</h3></label>
          <input id='email'
            type="email"
            placeholder='E-mail'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="mensagem"><h3>Entre com sua mensagem:</h3></label>
          <textArea id='mensagem'
            type="text"
            placeholder='Sua mensagem'
            onChange={(e) => setMessage(e.target.value)}
            value={message} />
          <button className='enviarForm'>Enviar</button>
        </form>
      </div>

    </div>
  );
}
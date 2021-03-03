import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import InputMask from 'react-input-mask'
import { useAlert } from "react-alert"

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

function Register() {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [whatsapp, setWhatsapp] = useState('')
   const [city, setCity] = useState('')
   const [uf, setUf] = useState('')
   const [description, setDescription] = useState('')

   const history = useHistory()
   const alertReact = useAlert()

   const handleRegister = async (e) => {
      e.preventDefault()

      const whats = whatsapp.replace(/[^0-9]+/g, '')

      const data = {
         name,
         email,
         whatsapp: whats,
         city,
         uf,
         about_me: description
      }

      try {

         await api.post('/ongs', data)

         alertReact.info('Você receberá seu ID de acesso pelo email em instantes')

         history.push('/resend')
      } catch (error) {
         alertReact.error('Erro no cadastro, tente novamente')
      }
   }

   return (
      <div className="register-container">
         <div className="content">
            <section>
               <img src={logoImg} alt="Be The Hero" />
               <h1>Cadastro</h1>
               <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

               <Link className="back-link" to="/">
                  <FiArrowLeft size={16} color="#e02041" />
                  Já possuo cadastro
               </Link>
            </section>
            <form onSubmit={handleRegister}>
               <input
                  name='name'
                  placeholder="Nome da ONG"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  minLength={4}
                  required={true}
               />
               <input
                  name='name'
                  placeholder="Detalhes da ONG"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  minLength={4}
                  required={true}
               />
               <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required={true}
               />
               <InputMask
                  mask='(99)99999-9999'
                  value={whatsapp}
                  onChange={e => setWhatsapp(e.target.value)}
                  placeholder="Whatsapp"
                  alwaysShowMask={false}
                  required={true}
               />

               <div className="input-group">
                  <input
                     placeholder="Cidade"
                     value={city}
                     onChange={e => setCity(e.target.value)}
                     required={true}
                  />
                  <input
                     placeholder="UF"
                     style={{ width: 80 }}
                     value={uf}
                     onChange={e => setUf(e.target.value)}
                     maxLength={2}
                     required={true}               
                  />
               </div>
               <button type="submit" className="button">Cadastrar</button>

            </form>
         </div>
      </div >
   )
}

export default Register

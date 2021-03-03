import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useAlert } from "react-alert"

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

function ReSendEmail() {
   const [email, setEmail] = useState('')

   const history = useHistory()
   const alertReact = useAlert()

   const handleReSendEmail = async (e) => {
      e.preventDefault()

      try {

         await api.post('/resend', { email })

         alertReact.info('Você receberá seu ID de acesso pelo email em instantes')

         history.push('/')
      } catch (error) {
         alertReact.error('Você ainda não possui cadastro')
      }
   }

   return (
      <div className="resend-container">
         <div className="content">
            <section>
               <img src={logoImg} alt="Be The Hero" />
               <h1>Reenviar</h1>
               <p>Caso não tenha recebido o ID de acesso no seu email, você pode reenviar o email. Caso contrário, acesse a plataforma clicando logo abaixo</p>

               <Link className="back-link" to="/">
                  <FiArrowLeft size={16} color="#e02041" />
                  Acessar plataforma
               </Link>
            </section>
            <form onSubmit={handleReSendEmail}>
               <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required={true}
               />
               <button type="submit" className="button">Reenviar</button>
            </form>
         </div>
      </div >
   )
}

export default ReSendEmail

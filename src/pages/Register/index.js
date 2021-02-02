import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import InputMask from 'react-input-mask';
// import { useForm } from 'react-hook-form';

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

function Register() {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [whatsapp, setWhatsapp] = useState('')
   const [city, setCity] = useState('')
   const [uf, setUf] = useState('')

   const history = useHistory()

   // const { register, handleSubmit, errors } = useForm()

   const handleRegister = async (e) => {
      e.preventDefault()

      const whats = whatsapp.replace(/[^0-9]+/g, '')

      // console.log(dados)

      const data = {
         name,
         email,
         whatsapp: whats,
         city,
         uf
      }

      try {

         const res = await api.post('/ongs', data)

         alert(`Seu ID de acesso: ${res.data}`)

         history.push('/')
      } catch (error) {
         alert('Erro no cadastro, tente novamente')

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
                  // ref={register({ required: true })}
                  name='name'
                  placeholder="Nome da ONG"
                  // value={name ? name : errors.name && 'Nome é obrigatório'}
                  value={name}
                  onChange={e => setName(e.target.value)}
               />
               <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
               <InputMask
                  mask='(99)99999-9999'
                  value={whatsapp}
                  onChange={e => setWhatsapp(e.target.value)}
                  placeholder="Whatsapp"
                  alwaysShowMask={false}
               />

               <div className="input-group">
                  <input
                     placeholder="Cidade"
                     value={city}
                     onChange={e => setCity(e.target.value)}
                  />
                  <input
                     placeholder="UF"
                     style={{ width: 80 }}
                     value={uf}
                     onChange={e => setUf(e.target.value)}
                  />
               </div>
               <button type="submit" className="button">Cadastrar</button>

            </form>
         </div>
      </div >
   )
}

export default Register

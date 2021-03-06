import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useAlert } from "react-alert"

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

function NewIncident() {
   const ongId = localStorage.getItem('ongId')

   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [value, setValue] = useState('')

   const history = useHistory()
   const alertReact = useAlert()

   async function handleNewInident(e) {
      e.preventDefault()

      const data = {
         title,
         description,
         value
      }

      try {
         await api.post('/incidents', data,
            {
               headers: {
                  Authorization: ongId
               }
            })

         history.push('/home')

      } catch (error) {
         alertReact.error('Erro em cadastrar caso')

      }

   }

   return (
      <div className="new-incident-container">
         <div className="content">
            <section>
               <img src={logoImg} alt="Be The Hero" />
               <h1>Cadastrar novo caso</h1>
               <p>Descreva o caso detalhadamento para encontrar um herói para resolver isso</p>

               <Link className="back-link" to="/home">
                  <FiArrowLeft size={16} color="#e02041" />
                  Voltar para home
               </Link>
            </section>
            <form onSubmit={handleNewInident}>
               <input
                  placeholder="Título do caso"
                  value={title}
                  onChange={e => { setTitle(e.target.value) }}
                  required={true}
               />

               <textarea
                  placeholder="Descrição"
                  value={description}
                  onChange={e => { setDescription(e.target.value) }}
                  required={true}
               />
               <input
                  placeholder="Valor em reais"
                  value={value}
                  onChange={e => { setValue(e.target.value) }}
                  required={true}
               />

               <button className="button">Cadastrar</button>
            </form>
         </div>
      </div>
   )


}

export default NewIncident
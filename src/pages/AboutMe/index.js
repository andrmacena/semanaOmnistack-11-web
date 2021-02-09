import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useAlert } from "react-alert"

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

function AboutMe() {
   const ongId = localStorage.getItem('ongId')

   const [image, setImage] = useState('')
   const [description, setDescription] = useState('')

   const history = useHistory()
   const alertReact = useAlert()

   async function handleAddNewImage(e) {
      e.preventDefault()

      const data = {
         description,
         image
      }

      try {
         await api.post('/ongs/addImage', data,
            {
               headers: {
                  Authorization: ongId
               }
            })

         history.push('/profile')

      } catch (error) {
         alertReact.error('Erro em cadastrar caso')

      }

   }

   return (
      <div className="new-incident-container">
         <div className="content">
            <section>
               <img src={logoImg} alt="Be The Hero" />
               <h1>Adicione uma imagem</h1>
               <p>Descreva sua ONG ou projeto social com o intuito de divulgar o seu trabalho para o público</p>

               <Link className="back-link" to="/profile">
                  <FiArrowLeft size={16} color="#e02041" />
                  Voltar para home
               </Link>
            </section>
            <form onSubmit={handleAddNewImage}>
            <input
                  placeholder="Arraste e solte a imagem"
                  value={image}
                  onChange={e => { setImage(e.target.value) }}
                  required={true}
               />
               <textarea
                  placeholder="Descreva sua ONG/Projeto Social"
                  value={description}
                  onChange={e => { setDescription(e.target.value) }}
                  required={true}
               />
               <button className="button">Adicionar</button>
            </form>
         </div>
      </div>
   )


}

export default AboutMe
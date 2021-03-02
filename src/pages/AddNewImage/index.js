import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft, FiFileMinus } from 'react-icons/fi'
import { useAlert } from 'react-alert'
import { FileDrop } from 'react-file-drop'

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

function AddNewImage() {
   const ongId = localStorage.getItem('ongId')

   const [url_image, setImage] = useState('')
   const [description, setDescription] = useState('')

   const history = useHistory()
   const alertReact = useAlert()

   async function handleAddNewImage(e) {
      e.preventDefault()

      const data = {
         description,
         url_image
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

   const handleImage = (file, event) => {

      const arquivo = file[0]

      var reader = new FileReader()

      reader.readAsDataURL(arquivo)

      reader.onload = function () {
         setImage(reader.result)
      }

   }

   return (
      <div className="aboutme-container">
         <div className="content">
            <section>
               <img src={logoImg} alt="Be The Hero" />
               <h1>Adicione uma imagem</h1>
               <p>Descreva sua ONG ou projeto social com algumas imagens visando a divulgação do seu trabalho para o público</p>

               <Link className="back-link" to="/profile">
                  <FiArrowLeft className="arrow-left"/>
                  Voltar para perfil
               </Link>
            </section>
            <form onSubmit={handleAddNewImage}>
               <div className="file-drop">
                  <FileDrop
                     onDrop={(files, event) => {
                        handleImage(files, event)
                        alertReact.success('Imagem adicionada!')
                     }}
                  >Arraste e solte a imagem aqui! <FiFileMinus className="file-minus" />
                  </FileDrop>
               </div>
               <textarea
                  placeholder="Descrição da imagem"
                  value={description}
                  onChange={e => { setDescription(e.target.value) }}
                  required={true}
               />
               <button className="button">Enviar</button>
            </form>
         </div>
      </div>
   )


}

export default AddNewImage
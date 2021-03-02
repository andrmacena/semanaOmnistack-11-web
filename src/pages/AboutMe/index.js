import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'
import './styles.css'

const stylesDescription = { display: 'flex', position: 'absolute', bottom: 10, fontSize: 20, left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', justifyContent: 'center' }

function AboutMe() {
   const [images, setImages] = useState([])

   const ongName = localStorage.getItem('ongName')
   const ongId = localStorage.getItem('ongId')

   const history = useHistory()

   useEffect(() => {
      api.get('/ongs/images', {
         headers: {
            Authorization: ongId
         }
      }).then(response => {
         setImages(response.data)
      })
   }, [ongId])

   function handleLogout() {
      localStorage.clear()
      history.push('/')
   }

   return (
      <div className="about-container">
         <header>
            <img src={logoImg} alt="Be The Hero" />
            <span>Bem vinda, {ongName}</span>

            <Link className="button" to="/home" style={{ width: 140 }}>Home</Link>
            <Link className="button" to="/images/new" style={{ width: 230, marginLeft: 16 }}>Adicionar imagem</Link>
            <button onClick={handleLogout} type="button">
               <FiPower size={18} color="#e02041" />
            </button>
         </header>
         <h1>Fotos</h1>
         <AwesomeSlider>
            {images.map(image => (
               <div key={image.id} data-src={image.url_image} style={{ width: '100%', height: '100%' }}>
                  <p style={stylesDescription}>{image.description}</p>
               </div>
            ))}
         </AwesomeSlider>
      </div>
   )
}

export default AboutMe
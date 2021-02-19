import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useAlert } from "react-alert"

import logoImg from '../../assets/logo.svg'
import heroes from '../../assets/heroes.png'
import './styles.css'

function AboutMe() {

   const ongName = localStorage.getItem('ongName')

   const history = useHistory()

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
            <div data-src={heroes} style={{ border: 5, width: '100%', height: '100%' }}/>
            <div data-src={heroes} style={{ border: 5, width: '100%', height: '100%' }}/>
            <div data-src={heroes} style={{ border: 5, width: '100%', height: '100%' }}/>
            <div data-src={heroes} style={{ border: 5, width: '100%', height: '100%' }}/>
         </AwesomeSlider>
         <p>Testando a descricao da imagem</p>


      </div>
   )
}

export default AboutMe
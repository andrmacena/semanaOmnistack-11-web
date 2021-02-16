import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { useAlert } from "react-alert"

import logoImg from '../../assets/logo.svg'
import './styles.css'

function AboutMe() {

   const ongName = localStorage.getItem('ongName')

   const history = useHistory()


   const incidents = [{
      id: 1,
      title: 'Teste',
      description: 'Descricao teste',
      value: 300
   },
   {
      id: 2,
      title: 'Teste 2',
      description: 'Descricao teste',
      value: 300
   },
   {
      id: 3,
      title: 'Teste 3',
      description: 'Descricao teste',
      value: 300
   },
   {
      id: 4,
      title: 'Teste 4',
      description: 'Descricao teste',
      value: 300
   },
   ]

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
         <ul>
            {incidents.map(incident => (
               <li key={incident.id}>
                  <strong>Caso:</strong>
                  <p>{incident.title}</p>

                  <strong>Descrição:</strong>
                  <p>{incident.description}</p>

                  <strong>Valor:</strong>
                  <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                  <button onClick={() => { }} type="button">
                     <FiTrash2 size={20} color="#a8a8b3" />
                  </button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default AboutMe
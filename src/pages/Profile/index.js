import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import './styles.css'

function Profile() {
   return (
      <div className="profile-container">
         <header>
            <img src={logoImg} alt="Be The Hero" />
            <span>Bem vinda, Joao de Barro</span>

            <Link className="button" to="/incidents/new">Cadastar novo caso</Link>
            <button type="button">
               <FiPower size={18} color="#e02041" />
            </button>
         </header>
         <h1>Casos cadastros</h1>
         <ul>
            <li>
               <strong>Caso:</strong>
               <p>Caso teste</p>

               <strong>Descrição:</strong>
               <p>Descricao teste</p>

               <strong>Valor:</strong>
               <p>Valor teste</p>
               <button type="button">
                  <FiTrash2 size={20} color="#a8a8b3"/>
               </button>
            </li>
            <li>
               <strong>Caso:</strong>
               <p>Caso teste</p>

               <strong>Descrição:</strong>
               <p>Descricao teste</p>

               <strong>Valor:</strong>
               <p>Valor teste</p>
               <button type="button">
                  <FiTrash2 size={20} color="#a8a8b3"/>
               </button>
            </li>
            <li>
               <strong>Caso:</strong>
               <p>Caso teste</p>

               <strong>Descrição:</strong>
               <p>Descricao teste</p>

               <strong>Valor:</strong>
               <p>Valor teste</p>
               <button type="button">
                  <FiTrash2 size={20} color="#a8a8b3"/>
               </button>
            </li>
            <li>
               <strong>Caso:</strong>
               <p>Caso teste</p>

               <strong>Descrição:</strong>
               <p>Descricao teste</p>

               <strong>Valor:</strong>
               <p>Valor teste</p>
               <button type="button">
                  <FiTrash2 size={20} color="#a8a8b3"/>
               </button>
            </li>
         </ul>
      </div>
   )

}

export default Profile

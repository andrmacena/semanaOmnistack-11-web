import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { useAlert } from "react-alert"

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'
import './styles.css'

function Home() {
   const [incidents, setIncidents] = useState([])

   const ongName = localStorage.getItem('ongName')
   const ongId = localStorage.getItem('ongId')

   const history = useHistory()
   const alertReact = useAlert()

   useEffect(() => {
      api.get('/ong/incidents', {
         headers: {
            Authorization: ongId
         }
      }).then(response => {
         setIncidents(response.data)
      })
   }, [ongId])

   async function handleDeleteIncident(id) {
      try {
         await api.delete(`/incidents/${id}`,
            {
               headers:
               {
                  Authorization: ongId
               }
            })

         setIncidents(incidents.filter(incident => incident.id !== id))

      } catch (error) {
         alertReact.error('Erro ao deletar caso')
      }
   }

   function handleLogout() {
      localStorage.clear()
      history.push('/')
   }

   return (
      <div className="profile-container">
         <header>
            <img src={logoImg} alt="Be The Hero" />
            <span>Bem vinda, {ongName}</span>

            <Link className="button" to="/incidents/new">Cadastar novo caso</Link>
            <Link className="button" to="/profile" style={{ width: 160, marginLeft: 16 }}>Perfil</Link>
            <button onClick={handleLogout} type="button">
               <FiPower size={18} color="#e02041" />
            </button>
         </header>
         <h1>Casos cadastros</h1>
         <ul>
            {incidents.map(incident => (
               <li key={incident.id}>
                  <strong>Caso:</strong>
                  <p>{incident.title}</p>

                  <strong>Descrição:</strong>
                  <p>{incident.description}</p>

                  <strong>Valor:</strong>
                  <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                  <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                     <FiTrash2 size={20} color="#a8a8b3" />
                  </button>
               </li>
            ))}
         </ul>
      </div>
   )

}

export default Home
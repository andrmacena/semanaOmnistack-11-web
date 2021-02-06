import React from 'react'
import Routes from '../routes'
import  '../../src/global.css'
import { positions, Provider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"

const options = {
   timeout: 5000,
   position: positions.BOTTOM_CENTER
 }
 

function App() {
   return (
      <Provider template={AlertTemplate} {...options}>
         <Routes />
      </Provider>
   )
}

export default App

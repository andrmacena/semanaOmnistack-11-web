import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon/index'
import Register from './pages/Register/index'
import Home from './pages/Home/index'
import NewIncident from './pages/NewIncident/index'
import AddNewImage from './pages/AddNewImage/index'
import AboutMe from './pages/AboutMe/index'

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/register" component={Register} /> 
            <Route path="/home" component={Home} />  
            <Route path="/incidents/new" component={NewIncident} />  
            <Route path="/profile" component={AboutMe} />  
            <Route path="/images/new" component={AddNewImage} />  
         </Switch>
      </BrowserRouter>
   )
}

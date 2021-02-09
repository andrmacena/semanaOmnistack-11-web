import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon/index'
import Register from './pages/Register/index'
import Profile from './pages/Profile/index'
import NewIncident from './pages/NewIncident/index'
import AboutMe from './pages/AboutMe/index'

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/register" component={Register} /> 
            <Route path="/profile" component={Profile} />  
            <Route path="/incidents/new" component={NewIncident} />  
            <Route path="/aboutme" component={AboutMe} />  
         </Switch>
      </BrowserRouter>
   )
}

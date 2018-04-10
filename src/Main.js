import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import { Router, Switch, Route } from 'react-router';

import Home from './Home'
import Resume1 from './Resume1'
import Resume2 from './Resume2'
import Cv1 from './Cv1'
import Cv2 from './Cv2'
import About from './About'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/resume1' component={Resume1}/>
      <Route path='/resume2' component={Resume2}/>
      <Route path='/cv1' component={Cv1}/>
      <Route path='/cv2' component={Cv2}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main;

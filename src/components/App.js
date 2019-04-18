import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './Header'
import Home from './Home'
import About from './About'
import Teachers from './Teachers'
import Courses from './Courses'



const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path="/" component={Home}/>
      {/*render instead of component is used to send props*/}
      <Route exact path ="/about" render = { () => <About title = 'About'/> }/>
      <Route exact path = "/teachers" component ={Teachers}/>
      <Route path = "/courses" component = {Courses}/>
    </div>
  </BrowserRouter>
);

export default App;

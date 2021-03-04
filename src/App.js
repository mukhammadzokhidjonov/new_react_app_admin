import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';


import {useState} from 'react';
import React from 'react';

import Tickets from './pages/Tickets';
import Overview from './pages/Overview';
import Ideas from './pages/Ideas';  
import Contacts from './pages/Contacts';
import Articles from './pages/Articles';
import Agents from './pages/Agents';
import Settings from './pages/Settings';
import Subscription from './pages/Subscription';

import Sidebar from './containers/Sidebar/Sidebar.js';


import './assets/styles/main.scss';

const App = () => {

  const [activePage, setActivePage] = useState('');

  return (
   <Router>
   	<div className="App">
 
   	<Sidebar activePage={activePage} setActivePage={setActivePage}/>
      
   	<Switch>
   		<Route exact path="/tickets" component={Tickets}/>
   		<Route exact path="/overview" component={Overview}/>
      <Route exact path="/ideas" component={Ideas}/>
      <Route exact path="/contacts" component={Contacts}/>
      <Route exact path="/articles" component={Articles}/>
      <Route exact path="/agents" component={Agents}/>
      <Route exact path="/settings" component={Settings}/>
      <Route exact path="/subscription" component={Subscription}/>


   	</Switch>	
  
   </div>
   </Router>
  );
}

export default App;

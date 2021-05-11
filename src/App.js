
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Tracker from './Pages/Tracker';
import Login from './Pages/Login';

import SignUp from './Pages/Signup';
// import Register from './Pages/Register';


function App() {
  return (
    <>
      <Router>
        

    <Switch>
      <Route path='/Home' exact component={Home} />
      <Route path='/tracker' exact component={Tracker}/>
      <Route path='/about'  exact component={About}/>
      <Route path='/Signup' exact component={SignUp}/>
      <Route path='/' exact component={Login}/>
    </Switch>
    </Router>

    
      
    </>
  );
}

export default App;

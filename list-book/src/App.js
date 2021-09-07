import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisPage from './pages/RegisPage';

const App = () => {
  

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>  
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/regis" component={RegisPage}/>
      </Switch>
    </Router>

  );
}

export default App;
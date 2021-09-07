import React from 'react';
import './App.css';
import Login from './Component/Login'
import Home from './Component/Home'
// import Daftar from './Component/Daftar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Loading  from './Pages/Loading';
import NotFound from './Pages/NotFound';

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (localStorage.getItem('status', true)) {
      next();
    }
    next.redirect('/login');
  } else {
    next();
  }
};

function App() {
  return (
    <div>
      <Router>
      <GuardProvider guards={[requireLogin]} loading={Loading} error={NotFound}>
        <Switch>
          <GuardedRoute path="/login" exact component={Login} />
          <GuardedRoute path="/" exact component={Home} meta={{ auth: true }} />
        </Switch>
      </GuardProvider>
    </Router>
    </div>
  );
}

export default App;

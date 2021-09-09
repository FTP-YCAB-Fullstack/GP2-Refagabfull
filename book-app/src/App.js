import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Loading  from './Pages/Loading';
import NotFound from './Pages/NotFound';
import Footer from './Pages/Footer';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';

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
          <GuardedRoute path="/login" exact component={LoginPage} />
          <GuardedRoute path="/" exact component={HomePage} meta={{ auth: true }} />
        </Switch>
      </GuardProvider>
    </Router>
    <Footer />
    </div>

  );
}

export default App;

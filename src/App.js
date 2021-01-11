import './App.css';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/CheckoutComponent';
import Login from './components/LoginComponent';
import { useStateValue } from './components/StateWrap';
import React, { useEffect } from 'react';
import { auth } from './components/FirebaseComponent';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

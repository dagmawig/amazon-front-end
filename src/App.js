import './App.css';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/CheckoutComponent';
import Login from './components/LoginComponent';

function App() {
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

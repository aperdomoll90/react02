import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Coffees from './components/Coffees';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </header>
        <section className="main-section">
          <Switch>

          <Route path="/coffee">
              <Coffees />
            </Route>

            <Route path="/">
              <Main />
            </Route>

          </Switch>
        </section>

        <section>
        <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;

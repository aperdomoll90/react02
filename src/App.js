import './App.css';
import React,{useState} from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Coffees from './components/Coffees';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Header 
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        />


      </header>
      <section className="main-section">
      <Main/>
      </section>
      <section>
        <Coffees/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;

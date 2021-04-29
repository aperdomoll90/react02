import React,{useState} from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

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
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

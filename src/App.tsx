import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Search from './components/Search';

const App: React.FC = () => {
  return (
      <div className="App">
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&display=swap" rel="stylesheet"/>
          <Header/>
          <main>
              <Search/>
          </main>
          <Footer/>
      </div>
  );
};

export default App;

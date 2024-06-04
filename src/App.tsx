import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Search from './components/Search';

const App: React.FC = () => {
  return (
      <div className="App">
        <Header />
        <main>
          <Search />
        </main>
        <Footer />
      </div>
  );
};

export default App;

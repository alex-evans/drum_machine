import React from 'react';
import './App.scss';
import Header from "./components/hearder";
import Footer from "./components/footer";
import DrumMachine from "./components/drumMachine";


function App() {
  return (
    <div id="app">
      <Header />
      <DrumMachine />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from "../../components/Navbar/navbar";
import Balance from "../../components/Balance/Balance";

function App() {
  return (
    <div className="App">
      <h1>Harmoney</h1>
        <Navbar/>
        <Balance/>
    </div>
  );
}

export default App;

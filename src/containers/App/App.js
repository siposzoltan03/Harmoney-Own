import React from 'react';
import './App.css';
import Navbar from "../../components/Navbar/navbar";
import DashboardChart from "../../components/Charts/DashboardChart";

function App() {
  return (
    <div className="App">
      <h1>Harmoney</h1>
        <Navbar/>
        <DashboardChart/>
    </div>
  );
}

export default App;

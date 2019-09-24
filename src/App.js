import React from 'react';
import './Components/Landing/Landing.css'
import './App.css';
import Header from './Components/Header/Header';
import "./Components/Header/Header.css"
import "./Components/EmployeeForm/EmployeeForm.css"
import "./Components/DevForm/DevForm.css"

import routes from './routes';

function App() {
  return (
    <div className="App">
      <Header/>
      {routes}
    </div>
  )
}

export default App;

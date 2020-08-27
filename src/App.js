import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Learning from './Component/Learning/Learning';
import Cover from './Component/Cover/Cover';

function App() {
  return (
    <div className="App-header">
      <Header></Header>
      <Cover></Cover>
      <Learning></Learning>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    //BEM
    <div className="App">
    
      <Header/>
      {/* Header -- everything above the bar which show "amazon" is head component */}
      {/* Home -- everything beneath is Home component */}
    </div>
  );
}

export default App;

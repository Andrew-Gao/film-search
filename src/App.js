import React from 'react';

import Header from './Header';
import MainBody from './MainBody';
import './App.css';

class App extends React.Component {
  
  render(){
    return(
      <div>
        <Header />
        <MainBody />
      </div>
    )
  }
}

export default App;

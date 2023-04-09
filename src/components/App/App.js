
import './App.css';
import React from 'react';
import NameList from './Component/NameList';


class App extends React.Component {

  render() {
    return (
      <div>
        <NameList />
        <ButtonCounter />
      </div>
    )
  }
}



export default App;


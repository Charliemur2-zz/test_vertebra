import React from 'react';
import ElementBox from './ElementBox';

// Principal app page
class App extends React.Component {
  render(){
    return(
      <div className="App">
        <h1>CRUD Technical Test Vertebra</h1>
        <ElementBox/>

      </div>
    );
  }  
}

export default App;

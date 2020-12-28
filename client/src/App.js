import React from 'react';
import ElementBox from './ElementBox';
import Providers from './Providers';

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <h1>CRUD Technical Test Vertebra</h1>
        <ElementBox/>
        <Providers/>

      </div>
    );
  }  
}

export default App;

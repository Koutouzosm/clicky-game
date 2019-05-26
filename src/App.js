import React from 'react';
import Wrapper from "./components/Wrapper"
import Card from "./components/Card"
import logos from './logo.json';
import './App.css';
import { isExpressionWrapper } from '@babel/types';


class App extends React.Component {
  // set up state and have it keep track of my logoList that is being imported over from logo.json

  state = {
    logoList: logos
  };



render() {
  return (
    <Wrapper>
      <h1
        className="title">Logo List</h1>
      {
        this.state.logoList.map(logo => {
          return (
            <Card
              key={logo.id}

            />
          )
        })
      }
    </Wrapper>
  )
}
}


export default App;

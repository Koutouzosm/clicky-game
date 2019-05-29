import React from 'react';
import Header from "./components/Header"
import Wrapper from "./components/Wrapper"
import Card from "./components/Card"
import logos from './logo.json';
import './App.css';



class App extends React.Component {
  // set up state and have it keep track of my logoList that is being imported over from logo.json

  state = {
    logoList: logos,
    idArray: []
  }


  incrementCount() {
    this.setState((state) => {
      return {count: state.count + 1}
    });
  }
  
  handleScore() {
    this.incrementCount();
  }

  shuffleLogos = () => {
    const shuffledLogoList = this.state.logoList.sort(() => 0.5 - Math.random());
  
    this.setState({
      logoList: shuffledLogoList
    });
  };

  handleClick = id => {
    console.log(id);
    if ((this.state.idArray).match()) {
      console.log("lose");
    }

    else {
      let tempArray = this.state.idArray + id;

      this.setState({
        idArray: tempArray
      })
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Wrapper>
          <h1 className="title">Logo List</h1>
          {
            this.state.logoList.map(logo => {
              return (
                <Card
                  key={logo.id}
                  name={logo.name}
                  image={logo.image}
                  id={logo.id}
                  handleClick={this.handleClick}
                />
              )
            })
          }
        </Wrapper>
      </ React.Fragment>
    )
  }
}


export default App;

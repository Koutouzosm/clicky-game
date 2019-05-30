import React from 'react';
import Jumbotron from "./components/Jumbotron"
import Wrapper from "./components/Wrapper"
import Card from "./components/Card"
import logos from './logo.json';
import './App.css';



class App extends React.Component {
  // set up state and have it keep track of my logoList that is being imported over from logo.json

  state = {
    logoList: logos,
    key: [],
    score: 0,
    highScore: 0
  }



  handleHighScore = () => {
    const {score, highScore} = this.state
    if (score > highScore){
      this.setState({
        highScore: score
      })
    }
  }

  incrementCount = () => {
    this.setState(() => {
      return {
        score: this.state.score + 1
      }
    });
  }


  shuffleLogos = () => {
    const shuffledLogoList = this.state.logoList.sort(() => 0.5 - Math.random());

    this.setState({
      logoList: shuffledLogoList
    });
  };

  handleClick = id => {
    console.log(id);

    if (this.state.key.includes(id)) {
      alert('You picked the same logo, start again!!')
      // shuffle cards and reset score to 0
      this.setState({
        score: 0,
        key: [],
      })
      this.handleHighScore()
    }
    else {
      const newKeys = [...this.state.key, id];
      // shuffle cards and update score by one
      this.setState({
        key: newKeys
      })
      console.log("win")
      this.incrementCount()
    }
    this.shuffleLogos()
  };

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <Jumbotron
        currentScore = {this.state.score}
        highScore = {this.state.highScore}
        />
        <Wrapper>
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

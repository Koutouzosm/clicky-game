import React from 'react';
import Wrapper from "./components/Wrapper"
import Card from "./components/Card"
import logos from './logo.json';
import './App.css';



class App extends React.Component {
  // set up state and have it keep track of my logoList that is being imported over from logo.json

  state = {
    logoList: logos
  }

  handleShuffledLogo = logoId => {

    const shuffledLogosList = this.state.logosList.sort(() => 0.5 - Math.random());

    this.setState({
      friendList: shuffledFriendList
    });

    this.setState({
      logoList: shuffledLogosList
    })
  }



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
                name={logo.name}
                image={logo.image}
              />
            )
          })
        }
      </Wrapper>
    )
  }
}


export default App;

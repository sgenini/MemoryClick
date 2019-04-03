import React from "react";
import Nav from "./components/Nav/nav";
import Jumbotron from "./components/Jumbotron/jumbotron";
import Card from "./components/Card/card";
import clicky from "./components/clicky.json";

class App extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    clickedArray:[],
    clicky
  }

  shuffleArray = (arr) => {
    let i,j,temp;
    for (i = arr.length - 1; i > 0; i--){
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  setHighScore = () => {
    if (this.state.score >= 0 && this.state.score >= this.state.highScore){
      this.setState({
        highScore: this.state.score
      });
    }
  }

  setClicked = (id) => {
    if (this.state.clickedArray.includes(id) === false){
      this.setState({
        score: this.state.score + 1,
        clickedArray: [...this.state.clickedArray, id],
        clicky: this.shuffleArray(clicky)
      })
    } else {
      this.setState({
        score: 0,
        clickedArray: []
      })
      this.setHighScore();
    }
  }

  render(){
    return (
      <div className="container-fluid memoryclick" style={{minHeight: "100vh", backgroundImage: "url('https://images.unsplash.com/photo-1533279443086-d1c19a186416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80')", paddingTop: 25}}>
        <Nav 
          score={this.state.score} 
          highScore={this.state.highScore} 
        />
        <Jumbotron>
          {clicky.map(option => {
            return (
              <Card 
                score={this.score}
                highScore={this.highScore}
                id={option.id}
                image={option.image}
                setClicked={this.setClicked}
              />
            )
          })}
        </Jumbotron>
      </div>
    );
  }

}

export default App;

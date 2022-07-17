import React, {Component} from "react";

class App extends Component {
  state = {
    good: 0, 
    neutral: 0,
    bad: 0
  }

  addGoodFeedback = () => {
    this.setState(prevState => ({
      good: this.state.good + 1,
    }));
  };

  addNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: this.state.neutral + 1,
    }));
  };

  addBadFeedback = () => {
    this.setState(prevState => ({
      bad: this.state.bad + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  };
  
  countPositiveFeedbackPercentage() {
    return Math.floor(((this.state.good) / (this.state.good + this.state.neutral + this.state.bad)) * 100);
    
  }


  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.addGoodFeedback}>Good</button>
          <button onClick={this.addNeutralFeedback}>Neutral</button>
          <button onClick={this.addBadFeedback}>Bad</button>
        </div>
        <h3>Statistics</h3>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {0 || this.countPositiveFeedbackPercentage()}%</p>
        


      </>
    )
  }
}


export default App;
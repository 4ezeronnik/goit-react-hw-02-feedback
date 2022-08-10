import React, { Component } from "react";
import Section  from "./Section/Section";
import Statistics  from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Container from "./Container/Container";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    const BtnClickTarget = e.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [BtnClickTarget]: prevState[BtnClickTarget] + 1,
    }))
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  };
  
  countPositiveFeedbackPercentage() {
    return Math.ceil(((this.state.good) / (this.state.good + this.state.neutral + this.state.bad)) * 100);
    
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title={'Statistics'}>
          {total === 0 ? <Notification message="There is no feedback" /> :  <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />} 
       
        </Section>
        </Container>
      
    )
  }
}


export default App;
import React, {Component} from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onClickFeedback = e => {
    const value = e.currentTarget.textContent;
    this.setState({
      [value]: this.state[value] + 1,
    });
  };
  
  countTotalFeedback() {
    const {good, neutral, bad} = this.state
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage(){
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(1)
  }
  

  render () {
      const {good, neutral, bad} = this.state;
      const total = this.countTotalFeedback();
      return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={['good', 'neutral', 'bad']} 
          onLeaveFeedback={this.onClickFeedback}/>
      </Section>

      <Section title="Statistics">
        {total ?
        (<Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          positivePercentage={this.countPositiveFeedbackPercentage()}/>)
          : (<Notification message="There is no feedback"/>)
          }
      </Section>
      </>
      )
  };
};
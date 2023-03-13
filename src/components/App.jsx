import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  totalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  positivePercentage = () => {
    const { good, bad, neutral } = this.state;
    console.log(good);
    let count = 0;
    count = (good / (good + bad + neutral)) * 100;
    return Math.round(count);
  };
  positiveFeedback = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  neutralFeedback = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  negativeFeedback = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            positive={this.positiveFeedback}
            negative={this.negativeFeedback}
            neutral={this.neutralFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.totalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

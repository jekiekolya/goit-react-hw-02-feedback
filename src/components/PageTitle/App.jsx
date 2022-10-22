import React, { Component } from 'react';
import { Container } from './App.styled';
import { Box } from '../Box';

export class App extends Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 2,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, item) => (acc = acc + item),
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good / total) * 100);
  };

  render() {
    return (
      <Box
        bg="mainBg"
        color="text"
        onClick={this.countPositiveFeedbackPercentage}
      >
        <Container>React homework template</Container>
      </Box>
    );
  }
}

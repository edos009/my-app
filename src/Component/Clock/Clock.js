import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timeId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  tick = () => {
    console.log(this);
    this.setState({ date: new Date() });
  };

  render() {
    const { date } = this.state;
    return (
      <>
        <h3>Get current date</h3>
        <p>{date.toLocaleTimeString()}</p>
      </>
    );
  }
}

export default Clock;

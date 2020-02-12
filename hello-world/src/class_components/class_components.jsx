import React from "react";

class AnotherCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // debugger;
    this.setState(oldState => ({ count: oldState.count + 1 }));
  }

  render() {
    return <button onClick={this.handleClick}>Clicked: {this.state.count} times</button>;
  }
}

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, step: 1 };
    this.handleClick = this.handleClick.bind(this);
    this.handleDeltaChange = this.handleDeltaChange.bind(this);
  }

  handleClick() {
    // debugger;
    const { step } = this.state;
    this.setState(oldState => ({ count: oldState.count + step }));
  }

  handleDeltaChange(e) {
    this.setState({ step: Number(e.target.value) });
  }

  render() {
    const { count, step } = this.state;

    return (
      <div>
        <p>Clicks: {count}</p>
        <input type="number" value={step} onChange={this.handleDeltaChange} />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}
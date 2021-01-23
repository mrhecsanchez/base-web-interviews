import React from 'react';
import logo from './logo.svg';
import './App.css';

class Repetitions extends React.Component {
  constructor(props) {
    super(props);
    this.countRef = React.createRef();
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.value.times) {
      this.countRef.current.style.color = 'red';
    } else {
      this.countRef.current.style.color = '';
    }
  }

  render() {
    return (
      <div className="repetitions">
        <div ref={this.countRef}>Count: {this.props.value.count}</div>
        {this.props.value.times === 0 && <div>Reset!</div>}
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      interval: null,
      value: {
        count: 0,
        times: 0,
      },
    };
  }

  componentDidMount() {
    const interval = setInterval(() => this.updateData(), 1000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    clearTimeout(this.state.interval);
  }

  updateData() {
    if (this.state.value.times >= 5) {
      this.setState({
        value: {
          count: this.state.value.count + 1,
          times: 0
        }
      });
    } else {
      this.setState({
        value: {
          ...this.state.value,
          times: this.state.value.times + 1
        }
      });
    }
  }

  render() {
    console.log('t', this.state);
    return (
      <div className="App">
        <Repetitions {...this.state} />
      </div>
    );
  }
}

export default App;

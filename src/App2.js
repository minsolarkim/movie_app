import React from 'react';
import PropTypes from "prop-types";

//State (동적 데이터 처리)
class App extends React.Component{ //필수!!!

  constructor(props) {
    super(props);
    console.log("hello");
  }

  state = {
    count: 0 
  };
  
  add = () => {
    // console.log("add");
    // this.state.count = 1; //Do not mutate state directly
    // this.setState({ count:this.state.count +1 })
      this.setState(current => ({ count: current.count + 1}));
  };

  minus = () => {
    // console.log("minus");
    // this.setState({ count:this.state.count - 1 })
      this.setState(current => ({ count: current.count -1 }));
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  componentWillUnmount () {
    console.log("Goodbye, cruel world");
  }
  
  render () { //대신 render가 있다
    console.log("I'm rendering");
    return <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
    
} //return을 안 가지고 있다!!(function이 아니기 때문에)


export default App;

import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  handleClick() {
    this.props.Actions.dummyAction();
  }

  handleStart() {
    this.props.Actions.nextQuestion();
  }

  render() {
    var progress = this.props.Store.progress;
    console.log(progress);
    if (progress === 0) {
      return(
        <button 
            className='btn btn-primary' 
            onClick={this.handleStart}
        >
          Start
        </button>
      );
    } else {
      return(
        <button 
            className='btn btn-primary' 
            onClick={this.handleClick}
        >
          Next
        </button>
      );
    }
  }
}

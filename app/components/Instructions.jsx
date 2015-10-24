import React from 'react';

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div className='Instructions'>
        <div className='LeftInstruction'>
          &#8592; No
        </div>
        <div className='RightInstruction'>
          Yes &#8594;
        </div>
      </div>);
  }
}

import React from 'react';

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let completed = +this.props.Store.completed;
    if (completed < 0) {completed = 0};
    if (completed > 100) {completed = 100};

    var style = {
      backgroundColor: this.props.Store.color || '#0BD318',
      width: completed + '%',
      transition: 'width 200ms',
      height: this.props.Store.height || 10
    };
    return (
      <div className='progressbar-container' >
        <div className='progressbar-progress' style={style}>{this.props.children}</div>
      </div>
    );
  }

}

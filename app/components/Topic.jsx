import React from 'react';

export default class Topic extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="currentTopic">
        {this.props.Store.currentTopic}
      </div>
    );
  }
}
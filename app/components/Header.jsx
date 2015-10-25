import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="page-header topBlock">
        <h1>
          Beerswiper
        </h1>
        <div className="subtitle">
          Remember, a tree never hits an car except in self defense.
        </div>
        <hr/>
        <br/>
        <div className="topic">
          <i>
          {this.props.Store.currentTopic}
          </i>
        </div>
        <div className="subtopic">
          <i>
          {this.props.Store.currentSubtopic}
          </i>
        </div>

      </div>
    );
  }
}

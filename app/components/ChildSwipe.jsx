import React from 'react';
import Swipeable from 'react-swipeable';
import Instructions from 'app/components/Instructions';

React.initializeTouchEvents(true);

export default class ChildSwipe extends React.Component {
  constructor(props) {
    super(props);
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  }

  handleLeft(e) {
    console.log("Swiped left");
    this.props.Actions.nextQuestion();
  }

  handleRight(e) {
    console.log("Swiped right");
    this.props.Actions.nextQuestion();
  }

  render() {
    return (
      <div>
        <Swipeable
          onSwipedRight={this.handleRight}
          onSwipedLeft={this.handleLeft}
        >
          <div className="mySwipe">

            
            <div className="question">
              {this.props.Store.currentQuestion}
            </div>
          </div>
        </Swipeable>

      </div>
    );
  }
}

import React from 'react';
import AltContainer from 'alt/AltContainer';
import Store from 'app/stores/Store';
import Actions from 'app/actions/Actions';
import ChildSwipe from 'app/components/ChildSwipe';
import ProgressBar from 'app/components/ProgressBar';
import Instructions from 'app/components/Instructions';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  componentDidMount() {
    Actions.dummyAction('Action message');
    Store.fetchAsync();
  }

  handleClick() {
    Actions.dummyAction();
  }

  handleStart() {
    Actions.nextQuestion();
  }

  render() {
    return(
      <AltContainer
          actions={{Actions: Actions}}
          stores={{Store: Store}}
      >
        <ChildSwipe/>
        <ProgressBar/>
        <Instructions/>
      </AltContainer>
    );
  }
}

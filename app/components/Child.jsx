import React from 'react';

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
    this.getCoords = this.getCoords.bind(this);
  }

  handleClick(event) {
    this.props.Actions.dummyAction();
  }

  componentWillMount() {
    this.getCoords();

  }

  getCoords() {
    navigator.geolocation.getCurrentPosition((res) => 
      { 
        console.log(res);
        this.setState({
          latitude: res.coords.latitude,
          longitude: res.coords.longitude
        });
      });
  }

  render() {
    if (this.props.Store.progress === 0) {
      return(<div/>);
    }
    return(
      <div className="jumbotron">
        {this.props.Store.dummyState}
      </div>
    );
  }
}

import React from 'react';

export default class ImagePane extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const baseUrl = 'app/static/images/drinks/';
    const currentUrl = this.props.Store.currentUrl;
    return(
      <div id='drinkPicContainer'>
        <img
            align='middle'
            className='resize center'
            src={baseUrl + currentUrl}
        />
      </div>
    );
  }
}

import React from 'react';
import moment from 'moment';

import './tracker-element.styles.css';

class TrackerElement extends React.Component {

  constructor(){
    super();

    this.state = {
      counter: 0,
      displayTime: null,
      interval: null,
      status: 'stopped'
    }
  }

  start = () => {
    if(this.state.status === 'stopped'){
      let intervalId = setInterval(this.timer, 1000);
      this.setState({status: 'started', interval: intervalId})
    } else {
      this.setState({status: 'stopped'})
      clearInterval(this.state.interval);
    }
  }

  timer = () => {
    this.setState({counter: this.state.counter + 1 });
    let displayTime = moment().hour(0).minutes(0).second(this.state.counter).format('HH : mm : ss');
    this.setState({displayTime});
  }

  remove = () => {

  }
  
  render(){
    return (
      <div className="tracker-element">
        <p className="tracker-element__name">
          {this.props.title}
        </p>
        <p className="tracker-element__time">
          { this.state.displayTime ? this.state.displayTime : '00 : 00 : 00' }
        </p>
        <div className="btn-group">
          <button className="start" onClick={this.start}>{this.state.status === 'stopped' ? 'Start' : 'Stop'}</button>
          <button className="remove" onClick={()=>this.props.onRemove(this.props.id)}>remove</button>
        </div>
      </div>
    )
  }
}

export default TrackerElement;
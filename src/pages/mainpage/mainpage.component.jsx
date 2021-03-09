import React from 'react';

import TrackerElement from '../../components/tracker-element/tracker-element.component';
import TrackerCreate from '../../components/tracker-create/tracker-create.component';

class MainPage extends React.Component{
  
  constructor(){
    super();

    this.state = {
      trackers: []
    }
  }
  
  handleInput = (value) => {
    if(value){
      let newTrackersList = [...this.state.trackers];
      newTrackersList.unshift({id: Date.now(), title: value});
      this.setState({trackers: newTrackersList});
    } else {
      let newTrackersList = [...this.state.trackers]
      newTrackersList.unshift({id: Date.now(), title: `No name tracker #${this.state.trackers.length + 1}`})
      this.setState({trackers: newTrackersList});
    }
  }

  handleRemove = (value) => {
    console.log(value);
    let filteredTrackers = this.state.trackers.filter(tracker => tracker.id !== value);
    this.setState({trackers: filteredTrackers});
  }

  render() { 
    return (
      <div className="main-page">
        <h1>Tracker</h1>
        <TrackerCreate onTrackerNameInput={this.handleInput}/>
        <div className="trackers-list">
          { this.state.trackers.map(tracker => <TrackerElement key={tracker.id} id={tracker.id} title={tracker.title} onRemove={this.handleRemove}/>)}
        </div>
      </div>
    )
  }
}

export default MainPage;
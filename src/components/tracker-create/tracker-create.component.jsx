import React from 'react';


const TrackerCreate = ({onTrackerNameInput}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    onTrackerNameInput(event.target.title.value);
    event.target.title.value = '';
  }
  
  
  return (
    <div className="tracker-create">
      <form className="tracker-create__form" onSubmit={handleSubmit}>
        <input className="tracker-create__input" type="text" name="title"/>
        <button className="tracker-create__submit" type="submit">Create</button>
      </form>
    </div>  
  )
  
}


export default TrackerCreate;
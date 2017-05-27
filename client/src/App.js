import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {};

  handleChange = (event) => {
    this.setState({[event.target.getAttribute('id')]: event.target.value});
  }

  handleClick = () => {
    fetch('http://localhost:3001/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        date: this.state.date,
        venue: this.state.venue
      })
    });
  }



  render() {
    return (
      <div className="container">
        <div className="left-panel">
          <div className='next-event'>
            <h1>NEXT EVENT</h1>
          </div>
          <div className='upcoming-events'>
          </div>
        </div>
        <div className="right-panel">
          <div className='new-event'>
            <h1>NEW EVENT</h1>
            <input id="title" type='text' onChange={this.handleChange} placeholder='TITLE'/>
            <input id="date" className="new" type="datetime-local" onChange={this.handleChange}  placeholder="DATE TIME"/>
            <input id="venue" type='text' placeholder='VENUE' onChange={this.handleChange}/>
            <button onClick={this.handleClick}> CREATE </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from './actions';
import { postEvent } from './eventFetch';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
//import logo from './logo.svg';
import './App.css';


// class EventList extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       data: []
//     };
//     this.getEvents();
//   }
//
//   getEvents () {
//     fetch('http://localhost:3001/events', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     })
//     .then((resp) => resp.json())
//     .then(data => {
//       this.setState({data});
//     });
//   }
//
//   renderEvents () {
//     console.log(this.state);
//     return this.state.data.map(element => {
//       return (
//         <div>
//           <h2>{element.title}</h2>
//           <p>{element.date}</p>
//           <p>{element.venue}</p>
//         </div>
//       )
//     });
//   }
//
//   render () {
//     return (
//       <div className="event-list-container">
//         {this.renderEvents()}
//       </div>
//     );
//   }
//
// }
//
//
// class NextEvent extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       data: []
//     };
//     this.getEvents();
//   }
//
//   getEvents () {
//     fetch('http://localhost:3001/events', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     })
//     .then((resp) => resp.json())
//     .then(data => {
//       this.setState({data});
//     });
//   }
//
//   renderEvents () {
//     if (this.state.data.length>0) {
//       console.log(this.state.data[0].title);
//         return (
//           <div>
//             <h2>{this.state.data[0].title}</h2>
//             <p>{this.state.data[0].date}</p>
//             <p>{this.state.data[0].venue}</p>
//           </div>
//         )
//     }
//   }
//
//   render () {
//     return (
//       <div className="event-list-container">
//         {this.renderEvents()}
//       </div>
//     );
//   }
//
// }


class App extends Component {
  state = {};

  handleChange = (event) => {
    this.setState({[event.target.getAttribute('id')]: event.target.value});
  }

  // handleClick = () => {
  //   fetch('http://localhost:3001/events', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       title: this.state.title,
  //       date: this.state.date,
  //       venue: this.state.venue
  //     })
  //   });
  // }

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
           <button onClick={() => this.props.addEvent(this.state.title, this.state.date, this.state.venue)}> CREATE </button>
         </div>
       </div>
     </div>
   );
 }
}

const mapStateToProps = (state) => ({
  // Map your state to props
  events: state.events,
});
const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions to props
  addEvent: (title, date, venue) => dispatch(addEvent(title, date, venue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';

import Picker from './picker';
import Button from './button';
import Clock from './clock';
import changeDate from './changeDate';
import LargeText from './largeText';

import moment from 'moment';

export default class App extends Component {

constructor(props) {
  super(props)

  this.state = {
    active: false,
    startDate: moment()
  }
}

handleChange = function(date) {
  console.log('trying to change date for', date._d);
  this.setState({
    startDate: date
  });
}.bind(this)

handleGenerate = function() {
  this.setState({ active: true })

  var countDownDate = this.state.startDate.toDate().getTime();

  
  var x = setInterval(function() {


  var now = new Date().getTime();
  
  
  var distance = countDownDate - now;


  var days = math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = math.floor((distance % (1000 * 60 * 60)) / (1000 *60));
  var seconds = math.floor((distance % (1000 * 60)) / 1000);

  
  const time = days + "d " hours + "h " + minutes + "m" + seconds + "s ";
  console.log(time)


  if (distance < 0)  {
    clearInterval(x);

    }
}, 1000);
  }.bind(this)

renderItems = function() {
  if(this.state.active) {
    return [
      <Clock/>,
      ChangeDate('Change Date', () => this.setState({ active: false })),
      LargeText('03/04'),
      <label className="grid__remaining">Remaining until your 21st birthday</label>
    ]
  } else {
    return [
      <Picker callBack = {this.handleChange}/>,
      Button('Generate Countdown', () => this.handleGenerate()) 
    ]
  } 
}.bind(this)

  render() {
    return (
      <div className="grid">
        <h1 className="grid__title">Birthday Countdown</h1>
        
        <div className="grid__skew-dark-two"></div>
        <div className="grid__skew-dark-three"></div>

        <div className="grid__skew-light-one"></div>
        <div className="grid__skew-light-two"></div>
        <div className="grid__skew-light-three-box"></div>

        { this.renderItems() }
      </div>
    );
  }
}

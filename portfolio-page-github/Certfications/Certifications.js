import React, { Component } from 'react';
import Sololearn from './Sololearn.js'

class Certifications extends Component {

  state = {
    solocerts: [
      {name: 'C#', img: "img", org: "Sololearn", date: "September, 2020", id: 1},
      {name: "jQuery", img: "img", org: "Sololearn", date: "July, 2020", id: 2},
      {name: "C", img: "img", org: "Sololearn", date: "July, 2020", id: 3},
      {name: "C++", img: "img", org: "Sololearn", date: "May, 2020", id: 4},
      {name: "PHP", img: "img", org: "Sololearn", date: "March, 2020", id:5},
      {name: "Ruby", img: "img", org: "Sololearn", date: "February, 2020", id: 6},
      {name: "JavaScript", img: "img", org: "Sololearn", date: "January, 2020", id: 7},
      {name: "CSS", img: "img", org: "Sololearn", date: "April, 2019", id: 8},
      {name: "HTML", img: "img", org: "Sololearn", date: "March, 2019", id: 9},
      {name: "Java", img: "img", org: "Sololearn", date: "December, 2018", id: 10},
      {name: "SQL", img: "img", org: "Sololearn", date: "August, 2018", id: 11},
      {name: "Python 3", img: "img", org: "Sololearn", date: "May, 2018", id: 12},
      {name: "C#", img: "img", org: "Sololearn", date: "December, 2017", id: 13}
    ]
  }

  render() {
    return (
      <div className="certifications">
        <div>Certifications</div>
        <Sololearn solocerts={this.state.solocerts}/>
      </div>
    );
  }
}

export default Certifications;
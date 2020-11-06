import React, { Component } from 'react';

class Certifications extends Component {

  state = {
    certs: [
      {name: 'C#', img: "img", org: "Sololearn", date: "September, 2020"},
      {name: "jQuery", img: "img", org: "Sololearn", date: "July, 2020"},
      {name: "C", img: "img", org: "Sololearn", date: "July, 2020"},
      {name: "C++", img: "img", org: "Sololearn", date: "May, 2020"},
      {name: "PHP", img: "img", org: "Sololearn", date: "March, 2020"},
      {name: "Ruby", img: "img", org: "Sololearn", date: "February, 2020"},
      {name: "JavaScript", img: "img", org: "Sololearn", date: "January, 2020"},
      {name: "CSS", img: "img", org: "Sololearn", date: "April, 2019"},
      {name: "HTML", img: "img", org: "Sololearn", date: "March, 2019"},
      {name: "Java", img: "img", org: "Sololearn", date: "December, 2018"},
      {name: "SQL", img: "img", org: "Sololearn", date: "August, 2018"},
      {name: "Python 3", img: "img", org: "Sololearn", date: "May, 2018"},
      {name: "C#", img: "img", org: "Sololearn", date: "December, 2017"}
    ]
  }

  render() {
    return (
      <div className="certifications">
        <div>Certifications</div>
      </div>
    );
  }
}

export default Certifications;
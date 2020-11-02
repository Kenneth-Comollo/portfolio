import React, { Component } from 'react';
import AddPersonForm from "./Components/AddPersonForm";
import PeopleList from "./Components/PeopleList";

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Contact Manager
        </h1>
      </header>
      <AddPersonForm />
      <PeopleList data={contacts} />
    </div>
  );
}

export default App;

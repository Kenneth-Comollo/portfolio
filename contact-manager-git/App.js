import React, { Component } from 'react';
import ContactManager from "./Components/ContactManager"

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Contact Manager
        </h1>
      </header>
      <ContactManager data={contacts} />
    </div>
  );
}

export default App;

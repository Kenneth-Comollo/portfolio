import React from 'react';
import ContactManager from "./Components/ContactManager"
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"]
};

// Reducer Function
function reducer(state = initialState, action) {
  switch(action.type) {
    case "ADD_PERSON":
      return {...state,
      contacts: [...state.contacts, action.data]}
    default:
      return state;
  }
}

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Manager</h1>
      </header>
      <Provider store={store}>
        <ContactManager />
      </Provider>
    </div>
  );
}

export default App;

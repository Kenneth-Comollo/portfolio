import React from 'react';

const Sololearn = ({solocerts}) => {
  const solocertList = solocerts.map(solocert => {
    return (
      <div className="solocert" key={solocert.id}>
        <div>{solocert.img}</div>
        <div>{solocert.name}</div>
        <div>{solocert.org}</div>
        <div>{solocert.date}</div>
      </div>
    )
  })
  return (
    <div className="solocert-list">
      { solocertList }
    </div>
  );
}

export default Sololearn;
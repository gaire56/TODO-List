import React, { useState } from 'react';

const App = () => {
  const [inputList, setInputList] = useState('');

  const itemAdd = (event) => {
    setInputList(event.target.value);
  };

  const addListItem = () => {};

  return (
    <>
      <div className="app">
        <div className="center__div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Item" onChange={itemAdd} />
          <button onClick={addListItem}> + </button>

          <ol>
            <li>{inputList}</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;

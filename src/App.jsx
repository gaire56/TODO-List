import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {
  const [inputList, setInputList] = useState('');

  const [items, setItems] = useState([]);

  const itemAdd = (event) => {
    setInputList(event.target.value);
  };

  const addListItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  return (
    <>
      <div className="app">
        <div className="center__div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={inputList}
            placeholder="Add a Item"
            onChange={itemAdd}
          />
          <button onClick={addListItem}> + </button>

          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemValue) => {
              return <ToDoList text={itemValue} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;

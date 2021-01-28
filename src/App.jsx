import React from 'react';

const App = () => {
  return (
    <>
      <div className="app">
        <div className="center__div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Item" />
          <button> + </button>

          <ol>
            <li>Buy Apple</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;

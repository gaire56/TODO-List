import React from 'react';

const ToDoList = (props) => {
  const removeItems = () => {};

  return (
    <>
      <div className="todo__style">
        <i className="fa fa-times" aria-hidden="true" onClick={removeItems}></i>

        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;

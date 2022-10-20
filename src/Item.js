import React from "react";
import "./App.css";
import { useState } from "react";

const Item = ({ todos, checkBox,filtered }) => {
  const [checked, setChecked] = useState(true);

  const handlecheck = (index, id, checked) => {
    setChecked(!checked);
    checkBox(index, id, checked);
  };
  return (
    <div>
      {filtered &&
        filtered.map((todo,index) => {
          return (
            <div  key={index} className="flex1">
             
              <input
             
                checked={todo.checked ? true : false}
                onChange={() => handlecheck(index, todos[index]._id, checked)}
                type="checkbox"
                className="checkbox"
              ></input>
         
              <li className="item">{todo.name}</li>
            </div>
          );
        })}
    </div>
  );
};

export default Item;

import React from "react";
import "./App.css";
import { useState } from "react";
import Item from "./Item";
import Filterbtns from "./Filterbtns";

const Input = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewtodo] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const addedItem = {
      name: newTodo,
      checked: false,
    };
    if (newTodo.length) {
      setTodos([...todos, addedItem]);
      setFiltered([...filtered, addedItem]);
      setNewtodo("");
      console.log(addedItem);
    }
  };
  const filterTasks = (value) => {
    let completed = [...todos];
    let active = [...todos];

    switch (value) {
      case "completed":
        let comp = completed.filter((todo) => todo.checked);

        setFiltered(comp);
        return;

      case "active":
        let act = active.filter((todo) => !todo.checked);
        setFiltered(act);
        return;

      case "all":
        setFiltered([...todos]);
        return;

      case "clear":
        handleDeleteTodos();
        setFiltered(todos.filter((x) => !x.checked));
        setTodos(todos.filter((item) => !item.checked));
        return;
        default:{
            console.log('todo')
        }
    }
  };
  const handleDeleteTodos = () => {
    let ids = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].checked) {
        ids.push(todos[i]._id);
      }
    }
  };

  const checkBox = (index, id, isChecked) => {
    const check = [...todos];
    check[index].checked = !check[index].checked;

    setTodos(check);
  };

  const checkall = () => {
    todos.map((todo) => {
        
      todo.checked = !todo.checked;
      setTodos([...todos]);
      return
    });
  };

  return (
    <div className="inp">
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          value={newTodo}
          onChange={(e) => {
            setNewtodo(e.target.value);
          }}
          placeholder="create a new todo..."
          className="input"
        ></input>
        <input type="checkbox" onChange={checkall} className="checkbox"></input>
      </form>
      <div className="container">
        <Item checkBox={checkBox} todos={todos} filtered={filtered} />
        <Filterbtns filterTasks={filterTasks} todos={todos} />
      </div>
    </div>
  );
};

export default Input;

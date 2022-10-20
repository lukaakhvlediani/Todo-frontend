import React from "react";

const Filterbtns = ({todos,filterTasks}) => {
    let count = todos.filter((todo) => !todo.checked);

  return (
    <div className="footer">
      <span>
        <p>{count.length} Items left</p>
      </span>
      <span>
        <button onClick={() => filterTasks("all")} className="btn">All</button>
        <button onClick={() => filterTasks("active")}  className="btn">Active</button>
        <button onClick={() => filterTasks("completed")} className="btn">Completed</button>
      </span>
      <span>
        <button onClick={() => filterTasks("clear")} className="btn">Clear Completed</button>
      </span>
    </div>
  );
};

export default Filterbtns;

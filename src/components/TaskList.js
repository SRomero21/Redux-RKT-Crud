import React from "react";
import { useSelector } from "react-redux";
export const TaskList = () => {
  const taskState = useSelector((state) => state.task);

  return (
    <div>
      {taskState.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

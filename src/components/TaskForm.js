import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";
import { v4 as uuid } from "uuid";
export const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
  };
  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <input type="text" name="title" placeholder="title" />
      <textarea name="description"></textarea>
      <button type="submit">Save</button>
    </form>
  );
};

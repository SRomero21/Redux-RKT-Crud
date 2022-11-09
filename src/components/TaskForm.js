import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/task/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
export const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.task);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
    }
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label htmlFor="title" className="block text-base font-bold mb-2">
        Task:{" "}
      </label>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        onChange={handleChange}
      />
      <label htmlFor="description" className="block text-base font-bold mb-2">
        Description:{" "}
      </label>

      <textarea
        name="description"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></textarea>
      <button type="submit" className="bg-indigo-600 px-2 py-1">
        Save
      </button>
    </form>
  );
};

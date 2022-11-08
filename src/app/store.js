import { configureStore } from "@reduxjs/toolkit";
import TaskRudcer from "../features/task/taskSlice";

export const store = configureStore({
  reducer: {
    task: TaskRudcer,
  },
});

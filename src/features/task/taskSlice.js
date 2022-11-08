import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Task 1", description: "Description 1", completed: false },
  { id: "2", title: "Task 2", description: "Description 2", completed: false },
];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;

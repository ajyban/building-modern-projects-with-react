import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [{ text: 'GO to', isCompleted: true }]
  },
  reducers: {
    createTodo: (state, action) => {
      state.value = [...state.value, { text: action.payload, isCompleted: false }]
    },
    markTodoAsCompleted: (state, action) => {
      const text = action.payload;
      const findTodo = state.value.find((todo) => todo.text === text);
      findTodo.isCompleted = true;
    },
    markTodoAsDeleted: (state, action) => {
      const text = action.payload;
      state.value = state.value.filter((todo) => todo.text !== text);
    }
  }
});
export const { createTodo, markTodoAsCompleted, markTodoAsDeleted } = todoSlice.actions

export default todoSlice;


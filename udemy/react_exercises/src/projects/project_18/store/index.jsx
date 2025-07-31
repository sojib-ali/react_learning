import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state) {
      state.counter++;
    },

    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },

    decrement(state) {
      state.counter--;
    },
  },
});

export const counterActions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;

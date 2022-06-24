import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    // 4 methods because we have 4 if clocks in the counterReducer
    // each method will automatically receive state and action
    // these methods will be called for us by redux depending on which action was triggered.
    // we dont need to write if checks anymore.
    // instead we will soon be able to identify these reducers and the dispatch actions that target these reducers
    // inside the methods we are allowed to mutate state
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

// export default counterSlice;
export default counterSlice.reducer;

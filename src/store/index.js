import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  // handler different actions and then return different state snapshots
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return state;
};

// createStore wnats a pointer at a reducer function as a parameter
const store = createStore(counterReducer);

export default store;

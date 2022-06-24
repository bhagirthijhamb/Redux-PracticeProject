import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     // 4 methods because we have 4 if clocks in the counterReducer
//     // each method will automatically receive state and action
//     // these methods will be called for us by redux depending on which action was triggered.
//     // we dont need to write if checks anymore.
//     // instead we will soon be able to identify these reducers and the dispatch actions that target these reducers
//     // inside the methods we are allowed to mutate state
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// const counterReducer = (state = initialState, action) => {
//   // handler different actions and then return different state snapshots
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.payload,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }
//   if (action.type === "toggle") {
//     return { showCounter: !state.showCounter, counter: state.counter };
//   }
//   return state;
// };

// createStore wnats a pointer at a reducer function as a parameter
// const store = createStore(counterReducer);
// const store = createStore(counterSlice.reducer); // createStore accepts only one reducer
// const store = configureStore({ reducer: counterSlice.reducer }); //if only one slice for reducer

import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

// map of reducers
const store = configureStore({
  // reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
  reducer: { counter: counterReducer, auth: authReducer },
});

// moved to respctive slice files
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;

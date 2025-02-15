import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import users from './slices/usersSlice';
import counter from './slices/counterSlice';
import filter from './slices/filterSlice';
import popup from './slices/popupSlice';
import review from './slices/reviewSlice';
import setting from './slices/settingSlice';

const combinedReducer = combineReducers({
  counter,
  users,
  filter,
  popup,
  review,
  setting,
});

//master reducer for the server side rendereing
const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      counter: {
        count: state.counter.count + action.payload.counter.count,
      },
      users: {
        users: [...action.payload.users.users, ...state.users.users],
      },
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });

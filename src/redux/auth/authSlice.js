import { createSlice } from '@reduxjs/toolkit';
import {
  getUser,
  logInForm,
  logOutForm,
  registationForm,
} from './authOperation';

const Status = {
  init: 'INIT',
  loading: 'LOADING',
  success: 'SUCCESS',
  error: 'ERROR',
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  status: Status.init,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registationForm.pending](state) {
      state.status = Status.loading;
    },
    [registationForm.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.status = Status.success;
    },
    [registationForm.rejected](state) {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.status = Status.error;
    },
    [logInForm.pending](state) {
      state.status = Status.loading;
    },
    [logInForm.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.status = Status.success;
    },
    [logInForm.rejected](state) {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.status = Status.error;
    },
    [logOutForm.pending](state) {
      state.status = Status.loading;
      state.isLoggedIn = false;
    },
    [logOutForm.fulfilled]() {
      return initialState;
    },
    [logOutForm.rejected](state) {
      state.status = Status.error;
      state.isLoggedIn = false;
    },

    [getUser.pending](state) {
      state.status = Status.loading;
      state.isLoggedIn = false;
    },
    [getUser.fulfilled](state, action) {
      state.status = Status.success;
      state.isLoggedIn = true;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
    },
    [getUser.rejected](state) {
      state.status = Status.error;
      state.isLoggedIn = false;
    },
  },
});
export default authSlice.reducer;

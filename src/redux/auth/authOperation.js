import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact } from 'helpers/Api';

export const registationForm = createAsyncThunk(
  'auth/registration',
  async (data, thunkApi) => {
    try {
      const response = await addContact(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

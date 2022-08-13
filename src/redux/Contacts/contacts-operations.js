import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return error;
    }
  }
);

export const createNewUser = createAsyncThunk(
  '/users/signup',
  async () => {
    try {
      const { data } = await axios.post('/users/signup');
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const loginUser = createAsyncThunk(
  '/users/login',
  async () => {
    try {
      const { data } = await axios.post('/users/login');
      return data;
    } catch (error) {
      return error;
    }
  }
);


export const logoutUser = createAsyncThunk(
  '/users/logout',
  async () => {
    try {
    	await axios.post('/users/logout');

    } catch (error) {
      return error;
    }
  }
);
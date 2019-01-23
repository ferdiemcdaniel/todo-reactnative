import React, { Component } from 'react';
import { createStore } from 'redux';
import { Todo } from './src/app/Todo';
import { Provider } from 'react-redux';
import reducer from './src/app/reducers';

const store = createStore(reducer)

export default () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);
import React from "react";
import {ADD_TODO,CLEAR_TODOS,REMOVE_TODO,TOGGLE_TODO_COMPLETED,ADD_TODOS_FROM_LOCAL_STORE} from '../actions/todo_actions';
export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
};

export const todoReducer = (state = [initialState], action) => {

    switch(action.type) {
        case ADD_TODO:
            return state.concat(action.payload);

        case CLEAR_TODOS:
            return  [];

        case TOGGLE_TODO_COMPLETED:
              return action.payload;

        case REMOVE_TODO:
              return action.payload;

        case ADD_TODOS_FROM_LOCAL_STORE:  
              return action.payload

    }
};


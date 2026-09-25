import { createReducer, on } from '@ngrx/store';

import { addTask, deleteTask, toggleTask } from './task.actions';

import { Task } from './task.model';

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: [],
};

export const taskReducer = createReducer(
  initialState,

  on(addTask, (state, { title }) => ({
    ...state,

    tasks: [
      ...state.tasks,

      {
        id: Date.now(),
        title: title,
        completed: false,
      },
    ],
  })),

  on(deleteTask, (state, { id }) => ({
    ...state,

    tasks: state.tasks.filter((task) => task.id !== id),
  })),

  on(toggleTask, (state, { id }) => ({
    ...state,

    tasks: state.tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
          }
        : task,
    ),
  })),
);

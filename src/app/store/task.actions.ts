import { createAction, props } from '@ngrx/store';

export const addTask = createAction(
  '[Task] Add Task',
  props<{ title: string }>()
);

export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ id: number }>()
);

export const toggleTask = createAction(
  '[Task] Toggle Task',
  props<{ id: number }>()
);

// Load Tasks
export const loadTasks = createAction(
  '[Task] Load Tasks'
);

export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ tasks: any[] }>()
);

export const loadTasksFailure = createAction(
  '[Task] Load Tasks Failure',
  props<{ error: string }>()
);
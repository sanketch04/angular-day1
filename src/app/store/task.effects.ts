import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { loadTasks, loadTasksSuccess, loadTasksFailure } from './task.actions';

import { catchError, map, switchMap, of } from 'rxjs';

export class TaskEffects {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),

      switchMap(() =>
        this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos?_limit=10').pipe(
          map((tasks) =>
            loadTasksSuccess({
              tasks: tasks.map((task) => ({
                id: task.id,
                title: task.title,
                completed: task.completed,
              })),
            }),
          ),

          catchError((error) =>
            of(
              loadTasksFailure({
                error: 'Failed to load tasks',
              }),
            ),
          ),
        ),
      ),
    ),
  );
}

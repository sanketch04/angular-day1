import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';

import { provideStore } from '@ngrx/store';
import { taskReducer } from './store/task.reducer';

import { provideEffects } from '@ngrx/effects';
import { TaskEffects } from './store/task.effects';

import { localStorageMetaReducer } from './store/local-storage.metareducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    provideRouter(routes),

    provideHttpClient(),

    provideStore(
      {
        tasks: taskReducer,
      },
      {
        metaReducers: [localStorageMetaReducer],
      },
    ),

    provideEffects(TaskEffects),
  ],
};

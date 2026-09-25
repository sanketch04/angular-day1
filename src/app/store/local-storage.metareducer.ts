import { ActionReducer } from '@ngrx/store';

export function localStorageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (state === undefined) {
      const savedState = localStorage.getItem('ngrx-state');

      if (savedState) {
        state = JSON.parse(savedState);
      }
    }

    const nextState = reducer(state, action);

    localStorage.setItem('ngrx-state', JSON.stringify(nextState));

    return nextState;
  };
}

import { Action, createReducer, on } from '@ngrx/store';

import { INITIAL_UI_STATE } from '@store/ui-state';
import { INITIAL_STORE_DATA } from '@store/store-data';
import { AppState } from '@store/models';
import * as appActions from './actions';


const INITIAL_APP_STATE: AppState = {
  uiState: INITIAL_UI_STATE,
  storeData: INITIAL_STORE_DATA,
};

const appReducer = createReducer(
  INITIAL_APP_STATE,
  on(
    appActions.loadUserThreads,
    (state, action) => {
      return {
        ...state,
        storeData: {
          ...state.storeData,
          ...action.payload,
        }
      };
    },
  ),
);

export function appReducerFn(state: AppState | undefined, action: Action): AppState {
  return appReducer(state, action);
}

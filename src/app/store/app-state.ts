import { INITIAL_UI_STATE, UiState } from '@store/ui-state';
import { INITIAL_STORE_DATA, StoreData } from '@store/store-data';
import { Action, createReducer, on, State } from '@ngrx/store';


export interface AppState {
  uiState: UiState;
  storeData: StoreData;
}

const INITIAL_APP_STATE: AppState = {
  uiState: INITIAL_UI_STATE,
  storeData: INITIAL_STORE_DATA,
};

const appReducer = createReducer(INITIAL_APP_STATE);

export function appReducerFn(state: AppState | undefined, action: Action): AppState {
  return appReducer(state, action);
}

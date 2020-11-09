import { INITIAL_UI_STATE, UiState } from '@store/ui-state';
import { INITIAL_STORE_DATA, StoreData } from '@store/store-data';


export interface AppState {
  uiState: UiState;
  storeData: StoreData;
}

export const INITIAL_APP_STATE: AppState = {
  uiState: INITIAL_UI_STATE,
  storeData: INITIAL_STORE_DATA,
};

// TODO: 4:20

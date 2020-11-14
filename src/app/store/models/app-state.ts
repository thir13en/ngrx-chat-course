import { UiState } from '@store/ui-state';
import { StoreData } from '@store/store-data';

export interface AppState {
  uiState: UiState;
  storeData: StoreData;
}

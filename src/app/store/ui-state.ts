export interface UiState {
  userId: number | undefined;
  currentThreadId: number | undefined;
}

export const INITIAL_UI_STATE: UiState = {
  userId: 1,
  currentThreadId: undefined,
};

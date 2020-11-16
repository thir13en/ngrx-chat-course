import { createAction, props } from '@ngrx/store';

import { AllUserData } from '@shared/to';


const LOAD_USER_THREADS = '[Threads] load user threads';

export const loadUserThreads = createAction(
  LOAD_USER_THREADS,
  props<AllUserData>(),
);

import { createAction } from '@ngrx/store';


const LOAD_USER_THREADS = '[Threads] load user threads';

export const loadUserThreads = createAction(LOAD_USER_THREADS);

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AllUserData } from '@shared/to';


@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  constructor(private http: HttpClient) { }

  loadUserThreads(): Observable<AllUserData> {
    return this.http.get<AllUserData>('/api/threads');
  }

}

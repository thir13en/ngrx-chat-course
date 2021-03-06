import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AllUserData } from '@shared/to';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  constructor(private http: HttpClient) { }

  loadUserThreads(userId: number): Observable<AllUserData> {
    const headers = new HttpHeaders().set('userId', userId.toString());

    return this.http
      .get<{ response: AllUserData }>(`/api/threads`, { headers })
      .pipe(map(res => res.response));
  }

}

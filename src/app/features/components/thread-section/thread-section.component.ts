import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';

import { ThreadsService } from '@shared/services';
import { StoreData, threadsActions } from '@store/index';
import { AppState } from '@store/models';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadSectionComponent implements OnInit {

  constructor(
    private threadsSrv: ThreadsService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.threadsSrv.loadUserThreads().subscribe(userTreads => {
      this.store.dispatch(threadsActions.loadUserThreads({ payload: userTreads }));
    });
    this.store.subscribe((store: AppState) => {
      console.log(store);
    }
);
  }

}

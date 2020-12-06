import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { ThreadsService } from '@shared/services';
import { threadsActions } from '@store/index';
import { AppState } from '@store/models';
import { mapEntry } from '@angular/compiler/src/output/map_util';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadSectionComponent implements OnInit {

  constructor(
    private threadsSrv: ThreadsService,
    private store: Store<{ appState: AppState }>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(console.log);
    this.store
      .pipe(take(1))
      .subscribe((store: { appState: AppState }) => {
      this.threadsSrv
        .loadUserThreads(store.appState.storeData.user.id)
        .subscribe(userTreads => {
          this.store.dispatch(threadsActions.loadUserThreads({ payload: userTreads }));
        });
    });
  }

}

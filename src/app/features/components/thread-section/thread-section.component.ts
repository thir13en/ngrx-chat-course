import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { map, skip, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { ThreadsService } from '@shared/services';
import { threadsActions } from '@store/index';
import { AppState } from '@store/models';
import { mapEntry } from '@angular/compiler/src/output/map_util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadSectionComponent implements OnInit {

  userName$!: Observable<string>;

  constructor(
    private threadsSrv: ThreadsService,
    private store: Store<{ appState: AppState }>
  ) { }

  ngOnInit(): void {
    this.fetchUserThreads();
    this.userName$ = this.store.pipe(
      skip(1),
      map(state => state.appState),
      map(this.mapStateToUserName),
    );
  }

  /**
   * maps store state to user name
   * @param state
   * @private
   */
  private mapStateToUserName({ storeData, uiState }: AppState): string {
    return storeData.participants[uiState.userId!].name;
  }

  /**
   * Get the user threads from the store and send them
   * to the reducer
   * @private
   */
  private fetchUserThreads(): void {
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

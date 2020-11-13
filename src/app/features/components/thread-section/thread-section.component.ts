import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';

import { ThreadsService } from '@shared/services';
import { threadsActions } from '@store/index';

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
    this.threadsSrv.loadUserThreads().subscribe(console.log);
    this.store.dispatch(threadsActions.loadUserThreads());
    this.store.subscribe(console.log);
  }

}

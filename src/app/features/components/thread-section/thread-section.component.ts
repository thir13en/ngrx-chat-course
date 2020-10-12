import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ThreadsService } from '@shared/services';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadSectionComponent implements OnInit {

  constructor(private threadsSrv: ThreadsService) { }

  ngOnInit(): void {
    this.threadsSrv.loadUserThreads();
  }

}

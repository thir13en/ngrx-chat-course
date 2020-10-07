import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

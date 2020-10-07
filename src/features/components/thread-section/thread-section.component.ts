import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

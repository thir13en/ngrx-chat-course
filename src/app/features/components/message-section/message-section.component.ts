import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

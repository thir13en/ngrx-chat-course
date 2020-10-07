import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

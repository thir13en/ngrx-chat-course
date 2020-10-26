import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreadSectionComponent } from '@features/components/thread-section/thread-section.component';

const routes: Routes = [
  { path: '', component: ThreadSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*************************************************************************************
 *************************************************************************************
 ***********  CORE MODULE: to be imported only once in the AppModule  ****************
 *************************************************************************************
 *************************************************************************************/

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserUnsupportedComponent, NotFoundComponent } from './pages';
import { StoreModule } from '@ngrx/store';
import { appReducerFn } from '@store/app-state';


@NgModule({
  imports: [
    StoreModule.forRoot({ reducer: appReducerFn }),
  ],
  exports: [
    HttpClientModule,
    StoreModule,
  ],
  declarations: [BrowserUnsupportedComponent, NotFoundComponent]
})
export class AppCoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: AppCoreModule
  ) {
    if (parentModule) {
      throw new Error('AppCoreModule is already loaded. You should only import it in the AppModule');
    }
  }
}

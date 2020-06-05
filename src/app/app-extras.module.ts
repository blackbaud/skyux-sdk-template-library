import {
  NgModule
} from '@angular/core';

import {
  MyLibrarySampleModule
} from './public/public_api';

@NgModule({
  exports: [
    MyLibrarySampleModule
  ]
})
export class AppExtrasModule { }

import { BaseHttpService } from './services/base-http.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkModule } from './network/network.module';
import { BaseService } from './services/base.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NetworkModule,
    HttpClientModule
  ],
  exports: [
    NetworkModule
  ],
  providers: [
    BaseService,
    BaseHttpService
  ]
})
export class CoreModule { }

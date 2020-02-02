import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeagoModule } from 'ngx-timeago';
import { DomainPipe } from './pipes/domain.pipe';

@NgModule({
  declarations: [DomainPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    TimeagoModule,
    DomainPipe
  ]
})
export class SharedModule { }

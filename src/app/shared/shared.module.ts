import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeagoModule } from 'ngx-timeago';
import { DomainPipe } from './pipes/domain.pipe';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [DomainPipe],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule,
    MatBadgeModule
  ],
  exports: [
    CommonModule,
    TimeagoModule,
    DomainPipe,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule,
    MatBadgeModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewStoriesComponent } from './new-stories.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NewStoriesComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: NewStoriesComponent }]),
    CommonModule,
    SharedModule
  ]
})
export class NewStoriesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'new-stories', pathMatch: 'full' },
  { path: 'new-stories', loadChildren: () => import('./features/new-stories/new-stories.module').then(m => m.NewStoriesModule) }
  // TODO: add comments
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

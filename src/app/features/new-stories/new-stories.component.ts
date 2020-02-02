import { Component } from '@angular/core';
import { HnNewStoriesService } from 'src/app/core/hn-new-stories.service';

@Component({
  selector: 'app-new-stories',
  templateUrl: './new-stories.component.html',
  styleUrls: ['./new-stories.component.scss']
})
export class NewStoriesComponent {

  constructor(private hnNewStoriesService: HnNewStoriesService) { }

  newStories$ = this.hnNewStoriesService.newStories$;
  
  getCommentsLength(id: string): number {
    // TODO: get length of comments tree
    return 0;
  }
  

}

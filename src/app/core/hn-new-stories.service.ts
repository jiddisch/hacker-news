import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { mergeMap, concatMap, scan, map } from 'rxjs/operators';
import { HnItem } from './hn-api.model';

@Injectable({ providedIn: 'root' })
export class HnNewStoriesService {

  constructor(private http: HttpClient) { }

  get newStories$(): Observable<HnItem[]> {
    return this.http.get<number[]>(environment.newStoriesUrl).pipe(
      mergeMap(res => res),
      concatMap(id => this.getStory$(id)),
      scan((acc, val: any) => [...acc, val], [])
    );
  }

  getStory$(storyId: number): Observable<HnItem> {
    return this.http.get<HnItem>('https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json').pipe(
      map(story => {
        return {...story, time: story.time * 1000};
      })
    );
  }
}

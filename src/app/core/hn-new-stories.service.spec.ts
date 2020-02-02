import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HnNewStoriesService } from './hn-new-stories.service';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

describe('HnNewStoriesService', () => {
  let service: HnNewStoriesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(HnNewStoriesService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable number[]',async( () => {
    const getStoryMock = [{
      "by": "LinuxBender",
      "descendants": 120,
      "id": 22206116,
      "kids": [22206445, 22206654, 22210823],
      "score": 519,
      "time": 1580506994,
      "title": "OpenSnitch is a GNU/Linux port of the Little Snitch application firewall",
      "type": "story",
      "url": "https://github.com/evilsocket/opensnitch"
    }]
    
    spyOn(service, 'getStory$').and.returnValue(of(getStoryMock));

    service.newStories$.subscribe(stories => {
      // TODO: add marble test
      // expect(stories.length).toBe(-1-2-3);
      console.log(stories);
      
      expect(stories[0][0].by).toBe('LinuxBender');
    });

    const req = httpTestingController.expectOne(environment.newStoriesUrl);
    expect(req.request.method).toBe("GET");

    req.flush(getStoryMock);
  }));
});

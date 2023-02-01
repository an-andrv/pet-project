import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { LocalizedDatePipe } from '@shared/pipes/localized-date.pipe';
import { CommentsService } from '@shared/services/comments.service';
import { of } from 'rxjs';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let commentsService: CommentsService;
  let spy: jasmine.Spy;

  const postId = 1;
  const mockComment = {
    postId: 1,
    id: 1,
    name: 'Name',
    email: 'name@mail.com',
    body: 'Post text'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent, LocalizedDatePipe ],
      imports: [ HttpClientTestingModule, BrowserAnimationsModule ],
      providers: [ CommentsService, provideMockStore({})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    commentsService = fixture.debugElement.injector.get(CommentsService);
    spy = spyOn(commentsService, 'getAll').and.returnValue(of([mockComment]));
    fixture.detectChanges();
  });

  it('should call commentsService', () => {
    component.getFirstComment(postId);
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should set comment', () => {
    component.getFirstComment(postId);
    expect(component.comment).toEqual(mockComment);
  });
});

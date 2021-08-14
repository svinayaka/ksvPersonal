import { TestBed } from '@angular/core/testing';

import { JavascriptSkillsService } from './javascript-skills.service';

describe('JavascriptSkillsService', () => {
  let service: JavascriptSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavascriptSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

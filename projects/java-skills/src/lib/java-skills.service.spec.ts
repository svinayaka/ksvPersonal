import { TestBed } from '@angular/core/testing';

import { JavaSkillsService } from './java-skills.service';

describe('JavaSkillsService', () => {
  let service: JavaSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavaSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

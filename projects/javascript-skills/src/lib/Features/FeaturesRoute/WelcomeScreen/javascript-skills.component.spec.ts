import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptSkillsComponent } from './javascript-skills.component';

describe('JavascriptSkillsComponent', () => {
  let component: JavascriptSkillsComponent;
  let fixture: ComponentFixture<JavascriptSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

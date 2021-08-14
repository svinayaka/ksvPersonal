import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaSkillsComponent } from './java-skills.component';

describe('JavaSkillsComponent', () => {
  let component: JavaSkillsComponent;
  let fixture: ComponentFixture<JavaSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

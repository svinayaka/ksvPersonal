import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-javascript-skills',
  templateUrl: './js-welcome.component.html',
})
export class JavascriptSkillsComponent implements OnInit {
  webPageTitle: string = 'Welcome to JavaScript';
  constructor() {}

  ngOnInit(): void {}
}

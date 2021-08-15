import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { JavascriptSkillsComponent } from './WelcomeScreen/javascript-skills.component';

export const routes: Routes = [
  { path: 'welcomeJs', component: JavascriptSkillsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'welcomeJs' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JSRoutingModule {}

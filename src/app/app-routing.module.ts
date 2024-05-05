import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponentComponent } from './components/main-component/main-component.component';

const routes: Routes = [
  // {path: '', component:MainComponentComponent},
  {path: 'login', component:LoginComponent},
  {path: 'jobs', component:JobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

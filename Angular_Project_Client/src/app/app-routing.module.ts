import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JobPageComponent } from './components/job-page/job-page.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponentComponent } from './components/main-component/main-component.component';

const routes: Routes = [
  {path: '', component:MainComponentComponent, children:[
    {path: 'jobs', component:JobPageComponent},
    {path: 'jobs/:field', component:JobPageComponent},
  ]},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
import { Router } from 'express';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { JobComponent } from './components/job/job.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { JobPageComponent } from './components/job-page/job-page.component';
import { RedColorDirective } from './directives/red-color.directive';
import { BackgroundDirective } from './directives/background.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponentComponent,
    JobComponent,
    JobsComponent,
    FilterComponent,
    JobPageComponent,
    RedColorDirective,
    BackgroundDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

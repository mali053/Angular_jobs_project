import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}

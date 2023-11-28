import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './modules/shared/login-component/login-component.component';
import { WelcomeComponentComponent } from './modules/shared/welcome-component/welcome-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    WelcomeComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

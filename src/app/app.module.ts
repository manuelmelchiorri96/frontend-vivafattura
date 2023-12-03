import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { JwtInterceptorService } from './service/core/jwt-interceptor.service';
import { RegistrazioneComponent } from './modules/registrazione/registrazione.component';
import { DomandeFrequentiComponent } from './modules/domande-frequenti/domande-frequenti.component';
import { BannerComponent } from './modules/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrazioneComponent,
    DomandeFrequentiComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true,
    },
    BannerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

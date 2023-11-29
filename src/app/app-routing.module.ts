import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponentComponent } from './modules/shared/welcome-component/welcome-component.component';
import { LoginComponentComponent } from './modules/shared/login-component/login-component.component';

const routes: Routes = [
  { path: '', component: WelcomeComponentComponent },
  { path: 'login', component: LoginComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

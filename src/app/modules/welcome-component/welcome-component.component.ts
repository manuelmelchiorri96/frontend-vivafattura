import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-component',
  templateUrl: './welcome-component.component.html',
  styleUrls: ['./welcome-component.component.css'],
})
export class WelcomeComponentComponent {
  constructor(private router: Router) {}

  vaiAlLogin() {
    this.router.navigate(['login']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  vaiAlLogin() {
    this.router.navigate(['login']);
  }

  vaiAllaRegistrazione() {
    this.router.navigate(['registrazione']);
  }

  vaiADomandeFrequenti() {
    this.router.navigate(['domande-frequenti']);
  }
}

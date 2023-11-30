import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteDTO } from 'src/app/model/dto/clienteDTO';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent {
  clienteLogin: ClienteDTO = new ClienteDTO('', '');
  showLoginError: boolean = false;

  constructor(private service: AuthenticationService, private router: Router) {}

  login() {
    this.service.login(this.clienteLogin).subscribe({
      next: (data) => {
        console.log(this.clienteLogin);
        console.log(data.jwtToken);
        console.log('autenticato');
      },
      error: (error) => {
        console.log(this.clienteLogin);
        console.log(error.error.message);
        console.log('non autenticato');
      },
    });
  }
}

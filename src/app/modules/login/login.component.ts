import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteDTO } from 'src/app/model/dto/clienteDTO';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { TokenService } from 'src/app/service/core/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  clienteLogin: ClienteDTO = new ClienteDTO('', '');

  constructor(
    private service: AuthenticationService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  login() {
    this.service.login(this.clienteLogin).subscribe({
      next: (data) => {
        console.log(data);
        this.tokenService.setToken(data.jwtToken);
        const tokenDecodificato: any = this.tokenService.decodeToken();
        const username: string = tokenDecodificato.sub;
      },
      error: (error) => {
        console.log(error.error.message);
      },
    });
  }
}

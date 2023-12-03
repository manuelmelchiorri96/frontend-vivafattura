import { Component } from '@angular/core';
import { ClienteDTO } from 'src/app/model/dto/clienteDTO';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { TokenService } from 'src/app/service/core/token.service';
import { BannerService } from 'src/app/service/banner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  clienteLogin: ClienteDTO = new ClienteDTO('', '');

  constructor(
    private service: AuthenticationService,
    private tokenService: TokenService,
    private bannerService: BannerService
  ) {}

  login() {
    this.service.login(this.clienteLogin).subscribe({
      next: (data) => {
        console.log(data);
        this.tokenService.setToken(data.jwtToken);
        const tokenDecodificato: any = this.tokenService.decodeToken();
        const username: string = tokenDecodificato.sub;
        this.bannerService.showSuccessBanner('Login effettuato con successo');
      },
      error: (error) => {
        console.log(error.error.message);
        this.bannerService.showErrorBanner('Login non riuscito');
      },
    });
  }
}

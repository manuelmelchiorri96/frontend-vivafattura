import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteDTO } from 'src/app/model/dto/clienteDTO';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(cliente: ClienteDTO): Observable<any> {
    return this.http.post(
      `http://localhost:8202/rest/api/authenticate`,
      cliente
    );
  }

  registrazione(): void {}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteDTO } from '../model/dto/clienteDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = 'http://localhost:';

  microservicePorts = {
    signUpService: 8202,
    authenticateService: 8203,
  };
}

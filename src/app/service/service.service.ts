import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  private baseUrl: string = 'http://localhost:';

  microservicePorts = {
    signUpService: 8202,
    authenticateService: 8203,
  };

  getAuthenticateUrl(): string {
    const port = this.microservicePorts.authenticateService;
    return `${this.baseUrl}${port}/rest/api/authenticate`;
  }

  getSignUpUrl(): string {
    const port = this.microservicePorts.signUpService;
    return `${this.baseUrl}${port}/rest/api/sign-up`;
  }
}

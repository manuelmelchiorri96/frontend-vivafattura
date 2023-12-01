import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  decodeToken(): any {
    const token = this.getToken();

    if (token) {
      return jwtDecode(token);
    }
    return null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isTokenScaduto(): boolean {
    const token = this.getToken();

    if (token) {
      const decodedToken: any = jwtDecode(token);

      // Ottieni la data di scadenza dal payload del token
      const dataScadenza = new Date(decodedToken.exp * 1000); // Converti da secondi a millisecondi

      // Confronta la data di scadenza con la data corrente
      const isScaduto = dataScadenza <= new Date();

      return isScaduto;
    }

    // Se il token non è presente, consideralo come scaduto
    return true;
  }
}

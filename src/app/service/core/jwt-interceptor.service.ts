import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptorService implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Verifica se la richiesta è per un endpoint pubblico
    if (this.isPublicEndpoint(req)) {
      // Se è pubblico, passa la richiesta senza aggiungere il token
      return next.handle(req);
    }

    // Altrimenti, ottieni il token dal servizio AuthService
    const token = this.tokenService.getToken();

    // Aggiungi il token all'header Authorization della richiesta
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    // Passa la richiesta modificata all'handler successivo
    return next.handle(req);
  }

  private isPublicEndpoint(req: HttpRequest<any>): boolean {
    return req.url.includes('/sign-up') || req.url.includes('/authenticate');
  }
}

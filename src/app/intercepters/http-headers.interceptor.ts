import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
          'x-rapidapi-key': 'f776343bd9msh8fddee62241142bp1d4e76jsn1704b583a3a2'
      },
      setParams: {
        key: 'f776343bd9msh8fddee62241142bp1d4e76jsn1704b583a3a2',
      }
    });
    return next.handle(req);
  }
}

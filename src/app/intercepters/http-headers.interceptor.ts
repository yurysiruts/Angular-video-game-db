import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      // headers from rapidAPI
      setHeaders: {
        'x-rapidapi-key': 'f776343bd9msh8fddee62241142bp1d4e76jsn1704b583a3a2',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      // params from RAWG db API
      setParams: {
         key: '153b8274a3e94866a57f22f127207b80',
      }
    });
    return next.handle(req);
  }
}

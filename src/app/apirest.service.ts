import { HttpClient, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = "http://localhost:8086/api/users"
const urlToken = "http://localhost:8086/token"

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  token = "";

  constructor(private http:HttpClient) {
    this.http.get<{'token':''}>(urlToken).subscribe(data =>  this.token = data.token

    );
  }

  getAllUsers() {
    //, {headers : new HttpHeaders().set('X-Auth-Token', this.token['token'])}
    this.http.get(url, {headers : new HttpHeaders().set('X-Auth-Token', this.token)}).subscribe(data=>console.log(data))
  }
}

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set("Authorization", "Requestor-Type")
    });
    return next.handle(xhr);
  }
}

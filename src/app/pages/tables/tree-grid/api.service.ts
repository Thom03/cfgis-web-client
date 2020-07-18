import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';


@Injectable({
  providedIn: 'root',
})

export class ApiService {


  constructor(private httpClient: HttpClient) { }

  private url = 'http://localhost:9800/api/projects';


getProjects() {

  // const token = localStorage.getItem('auth_app_token')
  // const t = JSON.parse(token)
  // console.log(t.value)
  // let headers = new HttpHeaders();
  // headers = headers.set('X-CSRFToken', `${t.value}`)
  // return this.httpClient.get(this.url, {headers: headers});
  return this.httpClient.get(this.url);
  }

// postProjects(){
//   const data = {};
//   return this.httpClient.post(this.url, data);
// }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ApiService {


  constructor(private httpClient: HttpClient) { }

  private url = 'http://localhost:9800/api/maplayers';

getMapLayers() {
   return this.httpClient.get(this.url);
  }

// postProjects(){
//   return this.httpClient.post(this.url);
// }
}

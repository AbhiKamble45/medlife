import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
   baseUrl:string = environment.baseUrl;
   httpHeaders:HttpHeaders = new HttpHeaders()
                             .set("Content-type","application/json")
  constructor(private http:HttpClient) { }

  getDataFromServer(endPonit:string){
    const url = this.baseUrl + endPonit;
    return this.http.get(url,{headers:this.httpHeaders});
   }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TinyUrl } from '../model/TinyUrl';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient){}

  list() {
    return this.httpClient.get<TinyUrl>(environment.API);
  }

  submit(url: Partial<TinyUrl>){
    return this.httpClient.post<TinyUrl>(environment.API, url);
  }
}

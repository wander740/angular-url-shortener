import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TinyUrl } from '../model/TinyUrl';
import { environment } from 'src/environments/environment.development';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient){}

  submit(url: Partial<TinyUrl>){
    return this.httpClient.post<TinyUrl>(environment.API, url).pipe(
      first()
    );
  }
}

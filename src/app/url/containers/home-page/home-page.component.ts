import { Component } from '@angular/core';
import { TinyUrl } from '../../model/TinyUrl';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  url$: Observable<TinyUrl>;

  constructor(apiService: ApiService){
    this.url$ = apiService.list();
  }

  copyUrl(content: string){
    console.log("a: "+content)
    navigator.clipboard.writeText(content)
  }
}

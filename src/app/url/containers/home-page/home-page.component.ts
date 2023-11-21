import { Component } from '@angular/core';
import { TinyUrl } from '../../model/TinyUrl';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  url: TinyUrl = {
    id: 0,
    url: 'a'
  }
}

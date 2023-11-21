import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { TinyUrl } from '../../model/TinyUrl';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  form = this.formBuilder.group({
    url: ['', [
      Validators.required,
      Validators.maxLength(1000)
    ]]
  });
  url$: Observable<TinyUrl>;

  constructor(
    private apiService: ApiService,
    private formBuilder: NonNullableFormBuilder,
  ){
    this.url$ = apiService.list();
  }

  onSubmit(){
    if(this.form.valid){
      this.apiService.submit(this.form.value).subscribe({
        next: (data) => this.onSucess(data), error: (error) => this.onError()
      });
    }
  }

  onError(){

  }

  onSucess(data: TinyUrl){
    navigator.clipboard.writeText(data.url)
  }

  copyUrl(content: string){
    navigator.clipboard.writeText(content)
  }
}

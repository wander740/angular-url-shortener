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
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  form = this.formBuilder.group({
    url: ['', [
      Validators.required,
      Validators.maxLength(1000),
      Validators.pattern(this.reg)
    ]]
  });
  url!: TinyUrl;
  spinner: boolean = false;

  constructor(
    private apiService: ApiService,
    private formBuilder: NonNullableFormBuilder,
  ){

  }

  onSubmit(){
    if(this.form.valid){
      this.spinner = true;
      this.apiService.submit(this.form.value).subscribe({
        next: (data) => this.onSucess(data), error: (error) => this.onError()
      });
    }
  }

  onError(){
    this.spinner = false;
  }

  onSucess(data: TinyUrl){
    this.spinner = false;
    this.url = data;
  }

  copyUrl(content: string){
    navigator.clipboard.writeText(content)
  }
}

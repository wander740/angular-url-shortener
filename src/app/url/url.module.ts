import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrlRoutingModule } from './url-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    UrlRoutingModule,
    ReactiveFormsModule
  ]
})
export class UrlModule { }

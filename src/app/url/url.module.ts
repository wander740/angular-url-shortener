import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrlRoutingModule } from './url-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    UrlRoutingModule,
    ReactiveFormsModule
  ]
})
export class UrlModule { }

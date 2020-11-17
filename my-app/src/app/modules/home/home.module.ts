import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import {HomeService} from './services/home.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  providers: [
    HomeService,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    HttpClientModule

  ],
  exports: []

})
export class HomeModule {
}

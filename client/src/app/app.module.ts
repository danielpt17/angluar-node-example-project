import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NgxUiLoaderModule} from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    ToastrModule.forRoot({preventDuplicates: true}),
    MatTooltipModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LocaleComponent } from './locale/locale.component';
import { PaymentProcessorComponent } from './payment-processor/payment-processor.component';
import { CorpIdEncrypterComponent } from './corp-id-encrypter/corp-id-encrypter.component';
import { OthersComponent } from './others/others.component';
import { ToolsComponent } from './tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    LocaleComponent,
    PaymentProcessorComponent,
    CorpIdEncrypterComponent,
    OthersComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
  

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'locale', component: LocaleComponent },
      { path: 'payment-processor', component: PaymentProcessorComponent },
      { path: 'corp-id-encrypter', component: CorpIdEncrypterComponent },
      { path: 'others', component: OthersComponent },
      { path: 'tools', component: ToolsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

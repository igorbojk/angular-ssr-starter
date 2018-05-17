import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-ssr-starter' }),
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
	constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
	    const platform = isPlatformBrowser(platformId) ?
	      'in the browser' : 'on the server';
	    console.log(`Running ${platform} with appId=${appId}`);
	  }
}

/** modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HeaderFooterModule } from './modules/header-footer/header-footer.module';
import { LoginSignUpModule } from './modules/login-sign-up/login-sign-up.module';
import { ProductModule } from './modules/product/product.module';
/** components */
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HeaderFooterModule,
    HttpClientModule,
    LoginSignUpModule,
    ProductModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFooterModule } from './modules/header-footer/header-footer.module';
import { LoginSignUpModule } from './modules/login-sign-up/login-sign-up.module';
import { ProductsModule } from './modules/products/products.module';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HeaderFooterModule,
    HttpClientModule,
    LoginSignUpModule,
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

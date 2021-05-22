import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { HomeChildComponent } from './home-child/home-child.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, DetailsComponent, HomeChildComponent],
  imports: [BrowserModule, UserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HomeSlideshowComponent } from './components/home/home-slideshow/home-slideshow.component';
import { ItemSlideshowComponent } from './components/home/item-slideshow/item-slideshow.component';
import { FeatureCardComponent } from './components/home/feature-card/feature-card.component';
import { HomeFormComponent } from './components/home/home-form/home-form.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeSlideshowComponent,
    HomeFormComponent,
    ItemSlideshowComponent,
    FeatureCardComponent,
    ReservationFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

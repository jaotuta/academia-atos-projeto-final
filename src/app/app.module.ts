import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjPageComponent } from './proj-page/proj-page.component';
import { HeaderComponent } from './proj-page/header/header.component';
import { MainSectionComponent } from './proj-page/main-section/main-section.component';
import { FooterComponent } from './proj-page/footer/footer.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { CalendarComponent } from './proj-page/calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjPageComponent,
    HeaderComponent,
    MainSectionComponent,
    FooterComponent,
    CalendarComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjPageComponent } from './proj-page/proj-page.component';
import { HeaderComponent } from './proj-page/header/header.component';
import { MainSectionComponent } from './proj-page/main-section/main-section.component';
import { FooterComponent } from './proj-page/footer/footer.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { CalendarComponent } from './proj-page/calendar/calendar.component';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { RecursoFormDialogComponent } from './proj-page/main-section/recurso-form-dialog/recurso-form-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';






@NgModule({
  declarations: [
    AppComponent,
    ProjPageComponent,
    HeaderComponent,
    MainSectionComponent,
    FooterComponent,
    CalendarComponent,
    RecursoFormDialogComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { MatDialogModule } from '@angular/material/dialog';
import { RecursoFormDialogComponent } from './proj-page/main-section/recurso-form-dialog/recurso-form-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToastConfirmacaoComponent } from './proj-page/toast-confirmacao/toast-confirmacao.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { TextFieldModule } from '@angular/cdk/text-field';


@NgModule({
  declarations: [
    AppComponent,
    ProjPageComponent,
    HeaderComponent,
    MainSectionComponent,
    FooterComponent,
    CalendarComponent,
    RecursoFormDialogComponent,
    ToastConfirmacaoComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    TextFieldModule,

  ],
  providers: [MainSectionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

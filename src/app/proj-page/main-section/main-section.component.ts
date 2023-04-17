import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecursoFormDialogComponent } from './recurso-form-dialog/recurso-form-dialog.component';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent {

  registros = [{nome: "João Lucas Cruz", func: "Engenheiro"}, {nome: "Maicon Roberto Soares", func: "Montador"}, {nome: "Maicon Roberto Soares", func: "Montador"}, {nome: "Maicon Roberto Soares", func: "Montador"}, {nome: "Maicon Roberto Soares", func: "Montador"}, {nome: "Maicon Roberto Soares", func: "Montador"}]

  constructor(public dialog: MatDialog) {};

  condition = true;

  openDialog(): void {
    const dialogRef = this.dialog.open(RecursoFormDialogComponent, {  

      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  dia = "14 de Abril de 2023"
}

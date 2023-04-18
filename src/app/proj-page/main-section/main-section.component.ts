import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecursoFormDialogComponent } from './recurso-form-dialog/recurso-form-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { ToastConfirmacaoComponent } from '../toast-confirmacao/toast-confirmacao.component';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent {

  registros = [{ id: 1, nome: "João Lucas Cruz", func: "Engenheiro" }, { id: 2, nome: "Maicon Roberto Soares", func: "Montador" }, { id: 3, nome: "Célio Roberto", func: "Eletricista" }, { nome: "Maicon Roberto Soares", func: "Montador" }, { nome: "Maicon Roberto Soares", func: "Montador" }, { nome: "Maicon Roberto Soares", func: "Montador" }]

  constructor(public dialog: MatDialog, private toastr: ToastrService) { };

  condition = true;

  showToaster(titulo: string, msg: string) {
    this.toastr.success(titulo, msg, {
      positionClass: 'toast-top-full-width'
    })
  }

  confirmacao(id_registro:any) {
    console.log(id_registro + ": Id_registro")
    const dialogRef = this.dialog.open(ToastConfirmacaoComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log("Registro removido.")
        this.showToaster( "Registro removido com sucesso!", "Remover")
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RecursoFormDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  dia = "14 de Abril de 2023"
}

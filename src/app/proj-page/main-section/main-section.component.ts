import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecursoFormDialogComponent } from './recurso-form-dialog/recurso-form-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { ToastConfirmacaoComponent } from '../toast-confirmacao/toast-confirmacao.component';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent {
  now = new Date();
  //dia = new.getDay();
  //mes = this.now.getMonth();
  dia = this.now.getDate() + " / " + (this.now.getMonth()+1) + " / 2023"
  registros :any;

  constructor(public dialog: MatDialog, private toastr: ToastrService, public service: ServiceService) { };

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
      console.log('The dialog was closed' + result);
    });
  }
  ngOnInit(){
    this.getListOfRegistros();  
  }

  getListOfRegistros() {
    this.registros = this.service.getListOfRegistros();
    
  }
  
}

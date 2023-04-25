import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecursoFormDialogComponent } from './recurso-form-dialog/recurso-form-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { ToastConfirmacaoComponent } from '../toast-confirmacao/toast-confirmacao.component';
import { ServiceService } from 'src/app/rda.service';
import { Recurso } from 'src/app/models/recurso.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
})
export class MainSectionComponent {
  
  now = new Date();
  monName = new Array(
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  );
  diaAtual: string;
  registros: any | [];
  diaPrevio = 4;
  condition = true;

  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    public service: ServiceService,
  ) { }


  showToaster(titulo: string, msg: string) {
    this.toastr.success(titulo, msg, {
      positionClass: 'toast-top-full-width',
    });
  }

  confirmacaoExclusao(id_registro: any) {
    console.log(id_registro + ': Id_registro');
    const dialogRef = this.dialog.open(ToastConfirmacaoComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Registro removido.');
        this.showToaster('Registro removido com sucesso!', 'Remover');
      }
    });
  }

  editarRecurso(id_registro: any) {
    console.log(id_registro)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RecursoFormDialogComponent, {
      minWidth: '550px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed' + result);
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.getDiaSelecionado();
      this.getListOfRegistros();
      this.service.refreshRequered.subscribe(response => {
        this.getListOfRegistros();
      })
    }, 80);
    console.log(this.diaPrevio)
  }

  public getDiaSelecionado() {
    this.diaAtual =
      this.service.dia +
      ' de ' +
      this.monName[parseInt(this.service.mes)] +
      ' de 2023';
  }

  teste () {
    this.diaPrevio = 8;
    //location.reload()
  }
  getListOfRegistros() {
    let diaa = this.service.dia;
    let mess = this.service.mes;
    this.service.getRdaWithDiaMes(diaa, mess).subscribe((data) => {
      this.registros = data;
      this.registros.toString()
        ? (this.condition = true)
        : (this.condition = false);
    });
  }
}

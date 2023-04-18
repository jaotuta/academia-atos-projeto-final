import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-toast-confirmacao',
  templateUrl: './toast-confirmacao.component.html',
  styleUrls: ['./toast-confirmacao.component.css']
})
export class ToastConfirmacaoComponent {
  constructor(
    public dialogRef: MatDialogRef<ToastConfirmacaoComponent>, private toastr: ToastrService
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }
  
  removerRegistro($event: any) {
    this.dialogRef.close(true);
  }
  showToaster(titulo: string, msg: string) {
    this.toastr.success(titulo, msg, {
      positionClass: 'toast-top-full-width'
    })
  }
}

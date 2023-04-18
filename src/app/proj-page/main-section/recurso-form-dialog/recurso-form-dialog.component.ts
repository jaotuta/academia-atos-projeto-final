import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-recurso-form-dialog',
  templateUrl: './recurso-form-dialog.component.html',
  styleUrls: ['./recurso-form-dialog.component.css']
})
export class RecursoFormDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RecursoFormDialogComponent>,
    public service: ServiceService
  ) {}

  addOk() {
    this.service.testeModArray();
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}

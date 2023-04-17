import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-recurso-form-dialog',
  templateUrl: './recurso-form-dialog.component.html',
  styleUrls: ['./recurso-form-dialog.component.css']
})
export class RecursoFormDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RecursoFormDialogComponent>,
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }

}

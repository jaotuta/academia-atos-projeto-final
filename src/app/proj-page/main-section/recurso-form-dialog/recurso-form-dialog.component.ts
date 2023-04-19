import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from 'src/app/rda.service';

@Component({
  selector: 'app-recurso-form-dialog',
  templateUrl: './recurso-form-dialog.component.html',
  styleUrls: ['./recurso-form-dialog.component.css']
})
export class RecursoFormDialogComponent {
  public recursoForm: FormGroup;
  dia: string;
  mes: string;

  constructor(
    public dialogRef: MatDialogRef<RecursoFormDialogComponent>,
    public service: ServiceService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.dia = this.service.dia;
    this.mes = this.service.mes;
    this.recursoForm = this.fb.group({
      nome: ['', [Validators.required]],
      funcao: ['', [Validators.required]],
      dia: [this.dia, [Validators.required]],
      mes: [this.mes, [Validators.required]],
      descricao: ['']
    })
  }

  addOk() {
    console.log(this.recursoForm.value)
    this.service.testeModArray();
    this.dialogRef.close(true);
    this.recursoForm.reset();
    //window.location.reload()
  }

  cancel(): void {
    this.dialogRef.close();
    this.recursoForm.reset();
  }

}

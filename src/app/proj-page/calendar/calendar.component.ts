import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
    
  dayName = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
  monName = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
  now = new Date
  diaDeInicio = this.now.getDay();

  ngOnInit() {
    const primeiroDia = document.querySelector(".dia-numerico");

    switch(this.diaDeInicio) {
      case 0: primeiroDia?.classList.add("domingo");
      break;
      case 1: primeiroDia?.classList.add("segunda");
      break;
      case 2: primeiroDia?.classList.add("terca");
      break;
      case 3: primeiroDia?.classList.add("quarta");
      break;
      case 4: primeiroDia?.classList.add("quinta");
      break;
      case 5: primeiroDia?.classList.add("sexta");
      break;
      case 6: primeiroDia?.classList.add("sabado");
      break;
    }


    console.log(primeiroDia?.innerHTML);
  }
}

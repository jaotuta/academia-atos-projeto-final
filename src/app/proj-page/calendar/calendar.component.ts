import { Component } from '@angular/core';
import { ServiceService } from 'src/app/rda.service';
import { MainSectionComponent } from '../main-section/main-section.component';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  //dayName = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
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
  diasDoMes = new Array();
  now = new Date();
  mes = this.now.getMonth();
  ano = this.now.getFullYear();
  qtdDiasNoMes = this.diasNoMes(this.mes, this.ano);
  diaDeInicio = this.retornaPrimeiroDiaDoMes(this.mes, this.ano);
  firstLoad = 0;
  diaSelecionado = this.now.getDate();

  constructor(
    public rdaService: ServiceService,
    public mainContent: MainSectionComponent
  ) {}

  diasNoMes(mes: number, ano: number) {
    var data = new Date(ano, mes + 1, 0);
    return data.getDate();
  }
  prevMonth() {
    if (!(this.mes < 1)) {
      this.mes = this.mes - 1;
      this.qtdDiasNoMes = this.diasNoMes(this.mes, this.ano);
      this.ngOnInit();
    }
  }
  nextMonth() {
    if (!(this.mes > 10)) {
      this.mes = this.mes + 1;
      this.qtdDiasNoMes = this.diasNoMes(this.mes, this.ano);
      this.ngOnInit();
    }
  }
  retornaPrimeiroDiaDoMes(mes: number, ano: number) {
    var data = new Date(ano, mes, 1);
    return data.getDay();
  }

  getDiaSelecionado($event: any) {
    this.diaSelecionado = $event.target.innerHTML;
    this.rdaService.dia = $event.target.innerHTML.trim();
    this.rdaService.mes = this.mes.toString();
    this.mainContent.getDiaSelecionado();
    this.mainContent.getListOfRegistros();
  }

  public getRdas() {
    this.rdaService.getRda().subscribe((data) => {
      let lista = data;
      const elemento = document.querySelectorAll('.conteudo');
      lista.forEach((item) => {
        elemento.forEach((dias) => {
          console.log (dias.innerHTML + " aquiii " + item.dia )
          if (parseInt(dias.innerHTML) == parseInt(item.dia)) {
            console.log("aqui entrou ")
            let pai = dias.parentElement;
            let elementoPreenchido = pai?.querySelector('.preenchido');
            elementoPreenchido?.classList.add('dia-preenchido');
            elementoPreenchido?.classList.remove('preenchido');
          } 
        });
      })
      
    });
  }

  ngOnInit() {
    this.diasDoMes = [];
    for (let i = 1; i <= this.qtdDiasNoMes; i++) {
      this.diasDoMes.push(i);
    }
    this.rdaService.dia = this.diaSelecionado.toString();
    this.rdaService.mes = this.mes.toString();
    this.getRdas();
  }

  ngDoCheck() {
    const primeiroDia = document.querySelector('.dia-numerico');
    const hoje = document.querySelectorAll('.conteudo');
    hoje.forEach((item) => {
      if (
        parseInt(item.innerHTML) == this.now.getDate() &&
        this.mes == this.now.getMonth()
      ) {
        item.classList.add('dia-atual');
      } else {
        item.classList.remove('dia-atual');
      }
    });
    if (this.firstLoad < 3) {
      switch (this.diaDeInicio) {
        case 0:
          primeiroDia?.classList.add('domingo');
          break;
        case 1:
          primeiroDia?.classList.add('segunda');
          break;
        case 2:
          primeiroDia?.classList.add('terca');
          break;
        case 3:
          primeiroDia?.classList.add('quarta');
          break;
        case 4:
          primeiroDia?.classList.add('quinta');
          break;
        case 5:
          primeiroDia?.classList.add('sexta');
          break;
        case 6:
          primeiroDia?.classList.add('sabado');
          break;
      }
    }

    this.firstLoad++;
  }
}

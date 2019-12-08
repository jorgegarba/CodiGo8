import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DayService, WeekService,
  WorkWeekService,
  MonthService, AgendaService,
  EventSettingsModel,
  ScheduleComponent
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-calendario',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  // ViewChild, captura a un elemento de la vista cuyo nombre 
  // está marcado con el operador # ejm: #fila2
  @ViewChild("fila2", { static: true }) fila2;
  @ViewChild("miCalendario", { static: true }) miCalendario: ScheduleComponent;

  data: object[] = [
    {
      Id: 1,
      Subject: 'Reserva de Juan Jimenez',
      StartTime: new Date(2019, 11, 6, 11, 0, 0),
      EndTime: new Date(2019, 11, 6, 13, 0, 0)
    }
  ];


  eventSettings: EventSettingsModel = {
    dataSource: this.data
  };

  constructor() {

  }

  ngOnInit() {
    console.log(this.fila2);
  }

  agregarEvento() {
    let nuevaData: object[] = [
      {
        Id: 2,
        Subject: 'Reserva de Christian Laurente',
        StartTime: new Date(2019, 11, 6, 15, 0, 0),
        EndTime: new Date(2019, 11, 6, 15, 30, 0)
      }
    ];
    this.miCalendario.addEvent(nuevaData)
  }
  agregarEventoHtml(objEvento) {
    console.log(objEvento);
    console.log(this.miCalendario.getEvents());
  }

}

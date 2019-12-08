import { RoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';


// SCHEDULE
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { CalendarioComponent } from './components/calendario/calendario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ScheduleModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

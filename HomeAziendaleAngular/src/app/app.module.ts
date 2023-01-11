import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestioneHomeComponent } from './gestione-home/gestione-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { BarraAmministratoreComponent } from './Amministrazione/barra-amministratore/barra-amministratore.component';
import { BarraTesoreriaComponent } from './Tesoreria/barra/barra-tesoreria.component';
import { BarraMasterComponent } from './Master/barra/barra-master.component';
import { BarraLogisticaComponent } from './Logistica/barra/barra-logistica.component'

@NgModule({
  declarations: [
    AppComponent,
    GestioneHomeComponent,
    BarraAmministratoreComponent,
    BarraTesoreriaComponent,
    BarraMasterComponent,
    BarraLogisticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FontAwesomeModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

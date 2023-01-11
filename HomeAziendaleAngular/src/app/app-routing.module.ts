import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraAmministratoreComponent } from './Amministrazione/barra-amministratore/barra-amministratore.component';
import { BarraLogisticaComponent } from './Logistica/barra/barra-logistica.component';
import { BarraMasterComponent } from './Master/barra/barra-master.component';
import { BarraTesoreriaComponent } from './Tesoreria/barra/barra-tesoreria.component';
import { GestioneHomeComponent } from './gestione-home/gestione-home.component';

const routes: Routes = [
  {path:'',component:GestioneHomeComponent},
  {path:'it',component:BarraAmministratoreComponent},
  {path:'lgs',component:BarraLogisticaComponent},
  {path:'mns',component:BarraMasterComponent},
  {path:'tsr',component:BarraTesoreriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

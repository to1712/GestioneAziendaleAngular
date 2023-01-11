import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraAmministratoreComponent } from './Amministrazione/barra/barra-amministratore.component';
import { BarraLogisticaComponent } from './Logistica/barra/barra-logistica.component';
import { BarraMasterComponent } from './Master/barra/barra-master.component';
import { BarraTesoreriaComponent } from './Tesoreria/barra/barra-tesoreria.component';
import { HomeITComponent } from './Amministrazione/home-it/home-it.component';
import { HomeLGSComponent } from './Logistica/home-lgs/home-lgs.component';
import { HomeMSRComponent } from './Master/home-msr/home-msr.component';
import { HomeTSRComponent } from './Tesoreria/home-tsr/home-tsr.component';


const routes: Routes = [
  {path:'it',component:HomeITComponent},
  {path:'lgs',component:HomeLGSComponent},
  {path:'mns',component:HomeMSRComponent},
  {path:'tsr',component:HomeTSRComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

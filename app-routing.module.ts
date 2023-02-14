import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PatientComponent} from "./components/patient/patient.component";
import {LoginGuard} from "../core/guards/login.guard";
import {LoginComponent} from "./components/login/login.component";
import { PatientmoduleComponent } from './components/patientmodule/patientmodule.component';
import { PatientviewComponent } from './components/patientview/patientview.component';
import { SpitalComponent } from './components/spital/spital.component';
import { SpitalallComponent } from './components/spitalall/spitalall.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { MedicComponent } from './components/medic/medic.component';
import { UserComponent } from './components/user/user.component';
import { IstoricComponent } from './components/istoric/istoric.component';


const routes: Routes = [
  {
    path: 'patient',
    canActivate: [LoginGuard],
    component: PatientComponent,
  },
  {
    path: 'home',
    canActivate: [LoginGuard],
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'istoric',
    canActivate: [LoginGuard],
    component: IstoricComponent,
  },

  {
    path: 'patientmodule',
    canActivate: [LoginGuard],
    component: PatientmoduleComponent,
  },
  {
    path: 'patientview',
    canActivate: [LoginGuard],
    component: PatientviewComponent,
  },
  {
    path: 'spitalall',
    canActivate: [LoginGuard],
    component: SpitalallComponent,
  },
  {
    path: 'spital',
    canActivate: [LoginGuard],
    component: SpitalComponent,
  },
  {
    path: 'administrator',
    canActivate: [LoginGuard],
    component: AdministratorComponent,
  },
  {
    path: 'medic',
    canActivate: [LoginGuard],
    component: MedicComponent,
  },
  {
    path: 'user',
    canActivate: [LoginGuard],
    component: UserComponent,
  },

  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {TableModule} from 'primeng/table';
import { PatientComponent } from './components/patient/patient.component';
import {HomeComponent} from "./components/home/home.component";
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {HttpClientModule} from '@angular/common/http';
import {MegaMenuModule} from 'primeng/megamenu';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { PatientmoduleComponent } from './components/patientmodule/patientmodule.component';
import { PatientviewComponent } from './components/patientview/patientview.component';
import { SpitalComponent } from './components/spital/spital.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { SpitalallComponent } from './components/spitalall/spitalall.component';
import { MedicComponent } from './components/medic/medic.component';
import { UserComponent } from './components/user/user.component';
import { IstoricComponent } from './components/istoric/istoric.component';
// import { IstoricComponent } from './components/istoric/istoric.component';





@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    HomeComponent,
    LoginComponent,
    PatientmoduleComponent,
    PatientviewComponent,
    SpitalComponent,
    AdministratorComponent,
    SpitalallComponent,
    MedicComponent,
    UserComponent,
  IstoricComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    TableModule,
    FormsModule,
    CheckboxModule,
    ButtonModule,
    CardModule,
    MegaMenuModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    ToolbarModule,
    HttpClientModule,
    DialogModule,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

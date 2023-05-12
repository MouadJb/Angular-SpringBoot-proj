import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
// Import HttpClientModule from @angular/common/http in AppModule
import { HttpClientModule } from '@angular/common/http';
import { EmployerCreateComponent } from './employer-create/employer-create.component';
import { FormsModule } from '@angular/forms';
import { EmployerUpdateComponent } from './employer-update/employer-update.component';
import { EmployerDetailsComponent } from './employer-details/employer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployerListComponent,
    EmployerCreateComponent,
    EmployerUpdateComponent,
    EmployerDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

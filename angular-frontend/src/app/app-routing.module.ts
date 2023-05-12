import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { EmployerCreateComponent } from './employer-create/employer-create.component';
import { EmployerUpdateComponent } from './employer-update/employer-update.component';
import { EmployerDetailsComponent } from './employer-details/employer-details.component';

const routes: Routes = [
  {path: 'employers', component: EmployerListComponent},
  {path: 'employer-create', component: EmployerCreateComponent},
  {path: 'employer-update/:id', component: EmployerUpdateComponent},
  {path: 'employer-details/:id', component: EmployerDetailsComponent},
  {path: '', redirectTo: 'employers', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

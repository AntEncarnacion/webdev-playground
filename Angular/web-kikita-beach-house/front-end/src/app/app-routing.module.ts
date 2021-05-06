import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reservation', component: ReservationFormComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

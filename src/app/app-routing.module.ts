import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyDetailsComponent } from './components/main/body-details/body-details.component';
import { BodyComponent } from './components/main/body/body.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'details',
    component: BodyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

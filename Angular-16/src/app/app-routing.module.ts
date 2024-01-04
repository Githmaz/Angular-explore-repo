import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import RegistraionComponent from './page/registraion/registraion.component';


const routes: Routes = [
  { path: '', component: NavBarComponent },
  { path: 'reg', component: RegistraionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

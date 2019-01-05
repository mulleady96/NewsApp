import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NasaComponent } from './Pages/nasa/nasa.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'NasaPic', component: NasaComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RedirectUrlComponent } from './redirect-url/redirect-url.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: ':shortId', component: RedirectUrlComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  { path:'signup', component:SignupComponent },
  { path:'signin', component:SigninComponent },
  { path:'', redirectTo:'home', pathMatch: 'full' },
  { path:'home', component:HomeComponent },
  { path:'contact', component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

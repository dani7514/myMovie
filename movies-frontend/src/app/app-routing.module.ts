import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PopularComponent } from './popular/popular.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TredingComponent } from './treding/treding.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'popular' , component: PopularComponent},
  {path: 'treding' , component: TredingComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'signup' , component: SignUpComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

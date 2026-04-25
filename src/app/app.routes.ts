import { MainPageComponent } from './../components/main-page/main-page.component';
import { Routes } from '@angular/router';
import { Navbar } from '../components/navbar/navbar';
import { LogInComponent } from '../components/LogIn/LogIn.component';
import { HomeComponent } from '../components/Home/Home.component';
import { AboutComponent } from '../components/About/About.component';
import { SeirviceComponent } from '../components/Seirvice/Seirvice.component';
import { BookNowComponent } from '../components/BookNow/BookNow.component';
import { ForgetPasswordComponent } from '../components/Forget-Password/Forget-Password.component';

export const routes: Routes = [


{path:'' , redirectTo:'main', pathMatch:'full'},
{path:"main" , component:MainPageComponent},

// {path:"login" , component:LogInComponent},
// {path:"home" , component:HomeComponent},
// {path:"about" , component:AboutComponent},
// {path:"service" , component:SeirviceComponent},
// {path:"booknow" , component:BookNowComponent},


{
    path: '',
    component: Navbar,
    children: [
      { path: 'login', component: LogInComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'service', component: SeirviceComponent },
      { path: 'booknow', component: BookNowComponent },
      { path: 'forget', component: ForgetPasswordComponent },
    ]
  }



];

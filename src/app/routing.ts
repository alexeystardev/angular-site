import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './main/dashboard/dashboard.component';


const arr: Routes = [

{path: '', redirectTo: '/home', pathMatch: 'full'},

{path: 'home', component: HomeComponent},
{path: 'blog', component: BlogComponent,},
{path: 'about', component: AboutComponent,},
{path: 'contact', component: ContactComponent},
{path: 'login', component: LoginComponent},
{path: 'registration', component: RegistrationComponent},
{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
];



export const routing = RouterModule.forRoot(arr);
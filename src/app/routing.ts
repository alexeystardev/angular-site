import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/login/login.component';
import { RegistrationComponent } from './main/registration/registration.component';


const arr: Routes = [

{path: '', redirectTo: '/home', pathMatch: 'full'},

{path: 'home', component: HomeComponent},
{path: 'blog', component: BlogComponent},
{path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},
{path: 'login', component: LoginComponent},
{path: 'registration', component: RegistrationComponent},
];



export const routing = RouterModule.forRoot(arr);
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { OverviewComponent } from './main/dashboard/overview/overview.component';
import { TasksComponent } from './main/dashboard/tasks/tasks.component';
import { AccountComponent } from './main/dashboard/account/account.component';
import { UsersComponent } from './main/dashboard/users/users.component';


const arr: Routes = [

{path: '', redirectTo: '/home', pathMatch: 'full'},

{path: 'home', component: HomeComponent},
{path: 'blog', component: BlogComponent,},
{path: 'about', component: AboutComponent,},
{path: 'contact', component: ContactComponent},
{path: 'login', component: LoginComponent},
{path: 'registration', component: RegistrationComponent},
{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
            {
                path: 'overview',
                component: OverviewComponent
            },
			 {
                path: 'tasks',
                component: TasksComponent
            },
			 {
                path: 'account',
                component: AccountComponent
            },
			 {
                path: 'users',
                component: UsersComponent
            }
        ]},
];


export const routing = RouterModule.forRoot(arr);
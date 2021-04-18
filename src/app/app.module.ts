import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './routing';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './menu/navbar/navbar.component';
import { ContactComponent } from './main/contact/contact.component';
import { AboutComponent } from './main/about/about.component';
import { BlogComponent } from './main/blog/blog.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './main/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { SideContentComponent } from './main/dashboard/side-content/side-content.component';
import { FooterComponent } from './main/footer/footer.component';
import { OverviewComponent } from './main/dashboard/overview/overview.component';
import { TasksComponent } from './main/dashboard/tasks/tasks.component';
import { AccountComponent } from './main/dashboard/account/account.component';
import { OnLoadContentComponent } from './main/dashboard/on-load-content/on-load-content.component';
import { CustomersComponent } from './main/dashboard/customers/customers.component';
import { CustomersService } from './services/customers.service';
import { AddcustomersComponent } from './main/dashboard/addcustomers/addcustomers.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    BlogComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    SideContentComponent,
    FooterComponent,
    OverviewComponent,
    TasksComponent,
    AccountComponent,
    OnLoadContentComponent,
    CustomersComponent,
    AddcustomersComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AngularFireAuthModule,
	AngularFireModule,
	ReactiveFormsModule,
    AppRoutingModule,
	AngularFireModule.initializeApp(environment.firebase),
	AngularFirestoreModule,
	routing
  ],
  providers: [AuthGuard, CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
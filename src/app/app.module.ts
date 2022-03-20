import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { ProjectsComponent } from './projects/projects.component';
import { LightboxDirective } from './components/model/lightbox.directive';
import { HttpClientModule} from '@angular/common/http';
import { TestService } from './components/services/test.service';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TableComponent } from './components/table/table.component';

let routs:Routes=[
  {path:'',component: SliderComponent},
  // {path:'Home', component: SliderComponent},
  {path:'About',component:AboutComponent},
  {path:'Profile',component:ProfileComponent},
  {path:'Projects',component:ProjectsComponent},
  {path:'login',component:LoginComponent},
  {path:'Slider',component:SliderComponent},
  {path:'**',component:ErrorComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    AboutComponent,
    ProfileComponent,
    LoginComponent,
    ErrorComponent,
    ProjectsComponent,
    LightboxDirective,
    ButtonsComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routs)
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

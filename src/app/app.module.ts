import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngmaterialModule } from './angmaterial/angmaterial.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
const myroutes : Routes=[
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngmaterialModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

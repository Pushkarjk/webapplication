import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TravelComponent } from './travel/travel.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'pricing', component: TravelComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: HomeComponent},
];

// {path: '', redirectTo: '/', pathMatch: 'full'}

@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

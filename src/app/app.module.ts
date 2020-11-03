import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  {path: 'todo', component: TravelComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/todo', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    AboutComponent
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

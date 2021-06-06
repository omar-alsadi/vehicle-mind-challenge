import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule , Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormComponent } from './components/form/form.component';

import { PhoneMaskDirective } from './components/form/phone';
import { ButtonComponent } from './components/button/button.component';

const appRoutes: Routes = [
  { path: '' , component: HomePageComponent},
  { path: 'signup' , component: FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PhoneMaskDirective,
    ButtonComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing : true}),
    AppRoutingModule
  ],
  exports: [
    PhoneMaskDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

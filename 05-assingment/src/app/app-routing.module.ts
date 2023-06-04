import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerExampleComponent } from './server-example/server-example.component';
import { ButtonBannerComponent } from './button-banner/button-banner.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'servers', component:ServerExampleComponent},
  {path:'button-banner', component: ButtonBannerComponent},
  {path:'home', component:HomepageComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

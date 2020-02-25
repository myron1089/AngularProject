import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutorizationComponent } from './pages/autorization/autorization.component';
import { HeaderComponent } from './layouts/header/header.component';
@NgModule({
    declarations: [HomePageComponent, AutorizationComponent, HeaderComponent],
    imports: [
      CommonModule,
      RouterModule,
      BrowserAnimationsModule,
     
      
    ],
    exports: [
        HomePageComponent,
      AdminRoutingModule,
    ]
  })


export class AdminModule { }
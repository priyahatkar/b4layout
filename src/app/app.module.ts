import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FeatureComponent } from './shared/components/feature/feature.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { InspirationComponent } from './shared/components/inspiration/inspiration.component';
import { FeatureInfoComponent } from './shared/components/featureInfo/featureInfo.component';
import { featureIconComponent } from './shared/components/featureIcons/featureIcon.component';
import { InfoSectionComponent } from './shared/components/info-section/info-section.component';
import { FooterListComponent } from './shared/components/footer-list/footer-list.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeatureComponent,
    FooterComponent,
    NavbarComponent,
    InspirationComponent,
    FeatureInfoComponent,
    featureIconComponent,
    InfoSectionComponent,
    FooterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

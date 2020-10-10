import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { OverviewComponent } from './overview/overview.component';
import { DrilldownComponent } from './drilldown/drilldown.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DrilldownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

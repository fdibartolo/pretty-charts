import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { DrilldownComponent } from './drilldown/drilldown.component';
import { ToolComponent } from './tool/tool.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DrilldownComponent,
    ToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

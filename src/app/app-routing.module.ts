import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DrilldownComponent } from './drilldown/drilldown.component';
import { ToolComponent } from './tool/tool.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  { path: 'overview', component: OverviewComponent },
  { path: 'drilldown/:capability', component: DrilldownComponent },
  { path: 'tools', component: ToolComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

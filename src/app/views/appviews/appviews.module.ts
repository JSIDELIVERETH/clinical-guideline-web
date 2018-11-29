import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';


// import {FacilityListComponent} from "./facility/facility-list-view/facility-list.component";

import {StarterViewComponent} from './starterview.component';

import {PeityModule} from '../../components/charts/peity';
import {SparklineModule} from '../../components/charts/sparkline';

@NgModule({
  declarations: [
    StarterViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PeityModule,
    SparklineModule
  ],
  exports: [
    StarterViewComponent
  ],
})

export class AppviewsModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {NgxBarcodeModule} from 'ngx-barcode';
import {NgSelectModule} from '@ng-select/ng-select';
import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';

// App views
import {DashboardsModule} from './views/dashboards/dashboards.module';
import {AppviewsModule} from './views/appviews/appviews.module';

// App modules/components
import {LayoutsModule} from './components/common/layouts/layouts.module';
import {NodeListComponent} from './node/node-list-view/node-list.component';
import {RelatedNodeListComponent} from './node/relatednode-list-view/relatednode-list.component';

import {HttpClientModule} from '@angular/common/http';
import {AddNodeComponent} from './node/add-node/add-node.component';

// services
import {NodeServices} from './Services/node.service';

@NgModule({
  declarations: [
    AppComponent,
    NodeListComponent,
    RelatedNodeListComponent,
    AddNodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    NgxBarcodeModule,
    NgSelectModule,
    HttpClientModule,
    DashboardsModule,
    LayoutsModule,
    AppviewsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, NodeServices],
  bootstrap: [AppComponent]
})
export class AppModule {
}

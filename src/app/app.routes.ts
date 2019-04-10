import {Routes} from '@angular/router';

import {NodeListComponent} from './node/node-list-view/node-list.component';
import {RelatedNodeListComponent} from './node/relatednode-list-view/relatednode-list.component';
import {AddNodeComponent} from './node/add-node/add-node.component';

import {Dashboard41Component} from './views/dashboards/dashboard41.component';
import {BasicLayoutComponent} from './components/common/layouts/basicLayout.component';
import {TopNavigationLayoutComponent} from './components/common/layouts/topNavigationlayout.component';

export const ROUTES: Routes = [
  // Main redirect
  {path: '', redirectTo: 'nodes', pathMatch: 'full'},

  // App views
  {
    path: 'nodes', component: BasicLayoutComponent,
    children: [
      {path: 'new/node', component: AddNodeComponent},
      {path: ':code', component: NodeListComponent},
      {path: 'newchild/:parentid', component: AddNodeComponent},
      {path: ':parentid/editchild/:id', component: AddNodeComponent},
      {path: 'edit/:id', component: AddNodeComponent},
      {path: 'related/:id', component: RelatedNodeListComponent}
    ]
  },
  // Handle all other routes
  {path: '**', redirectTo: 'nodes/FMGDC'}
];

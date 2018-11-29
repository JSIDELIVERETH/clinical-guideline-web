import {Component, OnDestroy, OnInit} from '@angular/core';
import {NodeServices} from '../../Services/node.service';
import {ActivatedRoute} from '@angular/router';
import {FacilityStatus} from '../../Data/app-data';
import {NodeType, Node, ParentNode} from '../../Models/node.model';
@Component({
  selector: 'app-list-view',
  templateUrl: 'relatednode-list.template.html',
  styleUrls: ['./list-view.component.css'],
  // providers: [FacilityService]
})
export class RelatedNodeListComponent implements OnDestroy, OnInit {

  public nav: any;
  public id: any;
  public hasChild: boolean;
  public nodeList: Node[];

  public constructor(private nodeServices: NodeServices, private route: ActivatedRoute) {
    this.nav = document.querySelector('nav.navbar');
    this.nodeList = [];
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.displayNodes(this.id);
    });
  }

  displayNodes(id: number) {
    this.nodeServices.getRelatedNodeByNodeId(id).subscribe(nodes => {
      this.nodeList = nodes;
      console.log('List of nodes', this.nodeList);
    });
  }

  public ngOnInit(): any {


  }


  public ngOnDestroy(): any {
    // this.nav.classList.remove("white-bg");
  }

}

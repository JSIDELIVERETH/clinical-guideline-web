import {Component, OnDestroy, OnInit} from '@angular/core';
import {NodeServices} from '../../Services/node.service';
import {ActivatedRoute} from '@angular/router';
import {FacilityStatus} from '../../Data/app-data';
import {NodeType, Node, ParentNode} from '../../Models/node.model';
@Component({
  selector: 'app-list-view',
  templateUrl: 'node-list.template.html',
  styleUrls: ['./list-view.component.css'],
  // providers: [FacilityService]
})
export class NodeListComponent implements OnDestroy, OnInit {

  public nav: any;
  public nodeList: Node[];
  code: string;

  public constructor(private nodeServices: NodeServices, private route: ActivatedRoute) {
    this.nav = document.querySelector('nav.navbar');
    this.nodeList = [];
    this.route.params.subscribe(params => {
      this.code = params['code'];
      this.displayNodes(this.code);
    });
  }

  displayNodes(code: string) {
    this.nodeServices.getNodes(code).subscribe(nodes => {
      this.nodeList = nodes;
      console.log('List of nodes', this.nodeList);
    });
  }

  public ngOnInit(): any {
    // this.nav.className += " white-bg";

  }


  public ngOnDestroy(): any {
    // this.nav.classList.remove("white-bg");
  }

}

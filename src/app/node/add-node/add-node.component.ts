import { NodeDescription } from './../../Models/node.model';
import { Component, OnInit } from '@angular/core';
import { Node, NodeType } from '../../Models/node.model';
import { NodeServices } from '../../Services/node.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.style.css', '../style/facility.style.css']
})
export class AddNodeComponent implements OnInit {
  node: Node;
  nodedescription: NodeDescription;
  public nodetypes: NodeType[];
  public relatednodes: Node[];
  public latitude: number;
  public longitude: number;
  errorMessage: String;
  public displayErrorMessage: boolean;
  public displaySuccessMessage: boolean;
  nodeName: string;
  submitted = false;
  id: number;
  parentId: number;
  page: number;
  constructor(
    private nodeService: NodeServices,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.displaySuccessMessage = false;
    this.displayErrorMessage = false;
    this.errorMessage = '';
    this.node = new Node();
    this.nodedescription = new NodeDescription();
    this.node.ParentNodes = [];
    if (route.params) {
      this.route.params.subscribe(params => {
        this.id = params['id'];
        this.parentId = params['parentid'];
      });
    }
  }
  displayNodes(id: number) {
    this.nodeService.getNode(id).subscribe(res => {
      this.node = res;
      console.log('Nodes', this.node);
    });
    this.getNodeDescription(id);
  }
  getParentNode(id: number) {
    this.nodeService.getNode(id).subscribe(res => {
      this.page = res.Page;
      this.node.Page = this.page;
      console.log('Parent Page', this.page);
    });
  }
  getRelatedNode(id: number) {
    this.nodeService.getRelatedNodeByNodeId(id).subscribe(res => {
      this.relatednodes = res;

      console.log('Related Nodes', this.relatednodes);
    });
  }
  getNodeDescription(id: number)
  {
    this.nodeService.getNodeDescription(id).subscribe(res => {
      if (res) {
        this.nodedescription = res; }
      });
  }
  onSubmit({ value, valid }: { value: any; valid: boolean }) {
    // this.node = value;
    this.submitted = true;
    console.log('Generated node Model: ');
    console.log(this.node);

    this.nodeService.AddOrUpdateNode(value).subscribe(
      res => {
        console.log('upsert', res);
        this.displaySuccessMessage = true;
        this.displayErrorMessage = false;
        setTimeout(() => {
          if (this.parentId)
          {
            console.log('parent',this.parentId);
            this.router.navigate(['/nodes/related/', this.parentId]);
            this.submitted = false;
          }
          else
          {
            this.router.navigate(['/nodes/ASMPT']);
            this.submitted = false;
          }
        }, 1000);
      },
      error1 => {
        console.log(error1);
        this.errorMessage = error1;
        this.displaySuccessMessage = false;
        this.displayErrorMessage = true;
        this.submitted = false;
      }
    );
  }
  onNodeDescriptionSubmit({ value, valid }: { value: any; valid: boolean }) {
    // this.node = value;
    this.submitted = true;
    console.log('Generated node Model: ');
    console.log(this.node);

    this.nodeService.AddOrUpdateNodeDescription(value).subscribe(
      res => {
        value.Id = this.id;
        console.log('upsert', res);
        this.displaySuccessMessage = true;
        this.displayErrorMessage = false;
        setTimeout(() => {
          if (this.parentId)
          {
            console.log('parent',this.parentId);
            this.router.navigate(['/nodes/related/', this.parentId]);
            this.submitted = false;
          }
          else
          {
            this.router.navigate(['/nodes/ASMPT']);
            this.submitted = false;
          }
        }, 1000);
      },
      error1 => {
        console.log(error1);
        this.errorMessage = error1;
        this.displaySuccessMessage = false;
        this.displayErrorMessage = true;
        this.submitted = false;
      }
    );
  }

  clearForm() {
    this.node = new Node();
    this.nodedescription = new NodeDescription();
    if (this.id) {
      this.displayNodes(this.id);
    } else if (this.parentId) {
      this.getParentNode(this.parentId);
    }
    if (this.parentId) {
      this.getRelatedNode(this.parentId);
    }
  }

  onFileUploadRequest(fileUploadEvent) {
    const fileName = fileUploadEvent.data.requestData.upload.name;
    const fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
    fileUploadEvent.data.requestData.upload.name = this.node.Id + '.' + fileExtension;
  }

  ngOnInit() {
    this.nodeService.getNodeTypes().subscribe(
      res => {
        console.log(res);
        this.nodetypes = res;
      },
      error1 => {
        console.log(error1);
      }
    );

    if (this.id) {
      this.displayNodes(this.id);
    } else if (this.parentId) {
      this.getParentNode(this.parentId);
    }
    if (this.parentId) {
      this.getRelatedNode(this.parentId);
    }
  }
}

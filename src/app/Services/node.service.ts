import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { NodeType, Node, NodeDescription } from '../Models/node.model';
import { ApiUrl } from '../Data/app.variables';
import { Router } from '@angular/router';

@Injectable()
export class NodeServices {
  headers: HttpHeaders;
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, public router: Router) {}

  AddOrUpdateNode(node: Node) {
    return this.http.post<Node>(ApiUrl.getNodes, node, {});
  }
  getNodeTypes(): Observable<NodeType[]> {
    return this.http.get<NodeType[]>(ApiUrl.getNodeTypes, {});
  }
  getRelatedNodeByNodeId(nodeId: number): Observable<Node[]> {
    if (nodeId) {
      return this.http.get<Node[]>(
        ApiUrl.getNodes + nodeId.toString() + ApiUrl.getRelatedNodes,
        {}
      );
    }
    return this.http.get<Node[]>(ApiUrl.getNodes, {});
  }
  getNodes(code: string): Observable<Node[]> {
    return this.http.get<Node[]>(ApiUrl.getNodes + '?Code=' + code, {});
  }
  getNode(id: number): Observable<Node> {
    return this.http.get<Node>(ApiUrl.getNodes + id.toString(), {});
  }
  getNodeDescription(id: number): Observable<NodeDescription> {
    return this.http.get<NodeDescription>(ApiUrl.getNodeDescriptions + id.toString(), {});
  }
  AddOrUpdateNodeDescription(node: NodeDescription) {
    return this.http.post<Node>(ApiUrl.getNodeDescriptions, node, {});
  }
}

import {DateInput} from 'ngx-bootstrap/chronos/test/chain';



// facility model containing only fields used for visualization

export class NodeType {
  Id: number;
  Name: string;
  NodeTypeCode: string;
}

export class Node {
  Id: number;
  Name: string;
  NodeTypeId: number;
  NodeTypeName: string;
  Page: number;
  IsActive: boolean;
  ParentNodes: number[];
}

export class NodeDescription {
  Id: number;
  Title: string;
  Description: string;
  IsCondition: boolean;
}


export class ParentNode {
  Id: number;
  ParentNodeId: number;
  ParentNodeName: string;
  IsActive: true;
}



import {environment} from '../../environments/environment';

export class ApiUrl {
  private static baseUrl = environment.baseUrl;
  public static getNodeTypes = ApiUrl.baseUrl + 'Nodes/NodeTypes';
  public static getRelatedNodes = '/RelatedNodes/';
  public static getNodes = ApiUrl.baseUrl + 'Nodes/';

  public static getNodeDescriptions = ApiUrl.baseUrl + 'NodeDescriptions/';

}


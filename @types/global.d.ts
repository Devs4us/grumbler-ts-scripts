import { $Values } from "utility-types";

export declare enum ENV {
  LOCAL = "local",
  STAGE = "stage",
  SANDBOX = "sandbox",
  PRODUCTION = "production",
  TEST = "test",
  DEMO = "demo",
}

declare var __TEST__: boolean;
declare var __WEB__: boolean;
declare var __MIN__: boolean;
declare var __DEBUG__: boolean;
declare var __ENV__: $Values<typeof ENV>;
declare var __TREE_SHAKE__: boolean;
declare var __WINDOW__: any;
declare var __GLOBAL__: any;
declare var __LOCAL__: boolean;
declare var __STAGE__: boolean;
declare var __SANDBOX__: boolean;
declare var __PRODUCTION__: boolean;

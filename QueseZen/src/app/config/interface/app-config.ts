export interface IFMenu {
  MENU_ID: string;
  MENU_NAME: string;
  MENU_DETAIL: string;
  MENU_URL: string;
  MENU_PARENT: string;
  ORDER_NO: number;
}

export interface IFGeneral {
  CONFIG_NAME: string;
  CONFIG_VALUE: any;
  CONFIG_DESCR: string;
}

/**
 * export เฉพาะ export interface นี้เท่านั้น
 */
export interface IFAppConfig {
  MENUS?: IFMenu[];
  GENURAL?: IFGeneral[];
}


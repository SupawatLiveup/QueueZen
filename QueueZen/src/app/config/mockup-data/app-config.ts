import { IFAppConfig } from 'src/app/config/interface/app-config';

export const appConfig: IFAppConfig = {
  MENUS: [
    {
      MENU_ID: '1',
      MENU_NAME: 'EntityConfigurations',
      MENU_DETAIL: 'Entity Configurations',
      MENU_URL: 'entity-configurations',
      MENU_PARENT: null,
      ORDER_NO: 1
    }, {
      MENU_ID: '2',
      MENU_NAME: 'BranchManagement',
      MENU_DETAIL: 'BranchManagement',
      MENU_URL: 'branch-management',
      MENU_PARENT: null,
      ORDER_NO: 2
    }, {
      MENU_ID: '3',
      MENU_NAME: 'QueueDashboard',
      MENU_DETAIL: 'Queue Dashboard',
      MENU_URL: 'queue-dashboard',
      MENU_PARENT: null,
      ORDER_NO: 3
    }
  ],
  GENURAL: [
    {
      CONFIG_NAME: 'NAME',
      CONFIG_VALUE: 'VALUE',
      CONFIG_DESCR: 'DESCR'
    }
  ]
};

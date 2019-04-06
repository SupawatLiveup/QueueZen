import { IFUser } from 'src/app/config/interface/user';
import { IFMenu, IFGeneral } from 'src/app/config/interface/app-config';

export interface IFCurrenceConfig  {
    USER_INFO: IFUser;
    MENUS: IFMenu[];
    GENERAL: IFGeneral[];
}

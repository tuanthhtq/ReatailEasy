import { NavigatorScreenParams } from "@react-navigation/native";

export enum UnauthorizedStackName {
  PROFILE =  'UnAuthProfile',
  LANDING = 'Landing',
  SCANNER = 'Scanner',
}
export type UnauthorizedParams = {
  [UnauthorizedStackName.SCANNER]: undefined,
  [UnauthorizedStackName.LANDING]: undefined,
  [UnauthorizedStackName.PROFILE]: NavigatorScreenParams<UnAuthProfileParams>,
}

export enum UnAuthProfileStackName {
  MAIN = "Main",
  LOGIN = "Login",
  ORDER_HISTORY = "OrderHistory",
  FEEDBACK = "Feedback",
}
export type UnAuthProfileParams = {
  [UnAuthProfileStackName.MAIN]: undefined;
  [UnAuthProfileStackName.LOGIN]: undefined;
  [UnAuthProfileStackName.ORDER_HISTORY]: undefined;
  [UnAuthProfileStackName.FEEDBACK]: undefined;
}

export enum AuthorizedStackName {
  HOME = "Home",
  CREATE_BILL = "CreateBill",
  IMPORT = "Import",
  MENU = "Menu",
  PROFILE = "Profile"
}
export type AuthorizedParams = {
  [AuthorizedStackName.HOME]: undefined,
  [AuthorizedStackName.CREATE_BILL]: NavigatorScreenParams<CreateBillParams>,
  [AuthorizedStackName.IMPORT]: undefined,
  [AuthorizedStackName.MENU]: NavigatorScreenParams<MenuParams>,
  [AuthorizedStackName.PROFILE]: undefined,
}

export enum MenuStackName{
  MENU_HOME = "MenuHome",
}
export type MenuParams = {
  [MenuStackName.MENU_HOME]: undefined
}

export enum CreateBillStackName{
  CREATE_BILL_HOME = "CreateBillHome",
}
export type CreateBillParams = {
  [CreateBillStackName.CREATE_BILL_HOME]: undefined
}

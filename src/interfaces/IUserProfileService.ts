import { IPerson } from './IPerson';

export interface IUserProfileService {
  getAllPropertiesForCurrentUser: () => any;
  getSinglePropertyForCurrentUser: (propertyName: string) => any;
  getMultiplePropertiesForCurrentUser:(propertyNames: string[]) => any;

  getAllPropertiesForUser: () => any;
  getSinglePropertyForUser: (propertyName: string) => any;
  getMultiplePropertiesForUser:(propertyNames: string[]) => any;

  getAllPropertiesForMultipleUsers: (targetUsers: string[]) => any;
  getSinglePropertyForMultipleUsers: (targetUsers: string[], propertyName: string) => any;
  getMultiplePropertiesForMultipleUsers:(targetUsers: string[], propertyNames: string[]) => any;
}
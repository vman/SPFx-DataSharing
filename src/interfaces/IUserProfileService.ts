import { IPerson } from './IPerson';

export interface IUserProfileService {
  getPropertiesForCurrentUser: () => Promise<IPerson>;
}
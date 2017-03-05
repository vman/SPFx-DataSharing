
import { ServiceScope, ServiceKey } from '@microsoft/sp-core-library';
import { SPHttpClient, ISPHttpClientOptions, SPHttpClientResponse } from '@microsoft/sp-http';
import { IPerson, IUserProfileService } from '../interfaces';

export class UserProfileService implements IUserProfileService {

    private _spHttpClient: SPHttpClient;
    private _currentWebUrl: string;

    constructor(spHttpClient: SPHttpClient, currentWebUrl: string) {
        this._spHttpClient = spHttpClient;
        this._currentWebUrl = currentWebUrl;
    }

    public getPropertiesForCurrentUser(): Promise<any> {

        return this._spHttpClient.get(`${this._currentWebUrl}/_api/SP.UserProfiles.PeopleManager/GetMyProperties`, SPHttpClient.configurations.v1).then((response: SPHttpClientResponse) => {

            return response.json().then((userProfileProps: any) => {

                return userProfileProps;
            });
        });
    }

}
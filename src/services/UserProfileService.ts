
import { ServiceScope, ServiceKey } from '@microsoft/sp-core-library';
import { SPHttpClient, HttpClient, ISPHttpClientOptions, SPHttpClientResponse } from '@microsoft/sp-http';
import { IPerson, IUserProfileService } from '../interfaces';
import { PageContext } from '@microsoft/sp-page-context'

export class UserProfileService implements IUserProfileService {

    public static readonly serviceKey: ServiceKey<IUserProfileService> = ServiceKey.create<IUserProfileService>('vrd:UserProfileService', UserProfileService);

    private _spHttpClient: SPHttpClient;
    private _pageContext: PageContext;
    private _currentWebUrl: string;

    constructor(serviceScope: ServiceScope) {
        serviceScope.whenFinished(() => {
            this._spHttpClient = serviceScope.consume(SPHttpClient.serviceKey);
            this._pageContext = serviceScope.consume(PageContext.serviceKey);
            this._currentWebUrl = this._pageContext.web.absoluteUrl;
        });

    }

    public getAllPropertiesForCurrentUser(): Promise<any> {

        return this._spHttpClient.get(`${this._currentWebUrl}/_api/SP.UserProfiles.PeopleManager/GetMyProperties`, SPHttpClient.configurations.v1).then((response: SPHttpClientResponse) => {

            return response.json().then((userProfileProps: any) => {

                return userProfileProps;
            });
        });
    }

    public getSinglePropertyForCurrentUser(propertyName: string) { }
    public getMultiplePropertiesForCurrentUser(propertyNames: string[]) { }

    public getAllPropertiesForUser() { }
    public getSinglePropertyForUser(propertyName: string) { }
    public getMultiplePropertiesForUser(propertyNames: string[]) { }

    public getAllPropertiesForMultipleUsers(targetUsers: string[]) { }
    public getSinglePropertyForMultipleUsers(targetUsers: string[], propertyName: string) { }
    public getMultiplePropertiesForMultipleUsers(targetUsers: string[], propertyNames: string[]) { }

}
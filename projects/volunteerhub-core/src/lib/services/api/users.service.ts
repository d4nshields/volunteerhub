/**
 * VolunteerHub OpenAPI
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { DeleteUserGroupMembershipsRequestBody } from '../model/deleteUserGroupMembershipsRequestBody';
// @ts-ignore
import { DeleteUserGroupMembershipsResponseBody } from '../model/deleteUserGroupMembershipsResponseBody';
// @ts-ignore
import { PostUserGroupMembershipsRequestBody } from '../model/postUserGroupMembershipsRequestBody';
// @ts-ignore
import { PostUserGroupMembershipsResponseBody } from '../model/postUserGroupMembershipsResponseBody';
// @ts-ignore
import { UserV2 } from '../model/userV2';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

    protected basePath = 'https://dailybread.volunteerhub.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            const firstBasePath = Array.isArray(basePath) ? basePath[0] : undefined;
            if (firstBasePath != undefined) {
                basePath = firstBasePath;
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substring(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Removes the user from the provided user groups
     * Returns a list of user group GUIDs from which the user was successfully removed.
     * @param id a user GUID
     * @param body a list of user group GUIDs from which the user should be removed
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userDeleteUserGroupMemberships(id: string, body: DeleteUserGroupMembershipsRequestBody, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<DeleteUserGroupMembershipsResponseBody>;
    public userDeleteUserGroupMemberships(id: string, body: DeleteUserGroupMembershipsRequestBody, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<DeleteUserGroupMembershipsResponseBody>>;
    public userDeleteUserGroupMemberships(id: string, body: DeleteUserGroupMembershipsRequestBody, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<DeleteUserGroupMembershipsResponseBody>>;
    public userDeleteUserGroupMemberships(id: string, body: DeleteUserGroupMembershipsRequestBody, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userDeleteUserGroupMemberships.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling userDeleteUserGroupMemberships.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'text/json',
                'application/xml',
                'text/xml'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v2/users/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}/usergroupmemberships`;
        return this.httpClient.request<DeleteUserGroupMembershipsResponseBody>('delete', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: body,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns a user
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userGet(id: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<UserV2>;
    public userGet(id: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<UserV2>>;
    public userGet(id: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<UserV2>>;
    public userGet(id: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userGet.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'text/json',
                'application/xml',
                'text/xml'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v2/users/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}`;
        return this.httpClient.request<UserV2>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Adds the user to the provided user groups
     * Returns a list of user group GUIDs to which the user was successfully added.
     * @param id a user GUID
     * @param body a list of user group GUIDs to which the user should be added
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userPostUserGroupMemberships(id: string, body: PostUserGroupMembershipsRequestBody, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<PostUserGroupMembershipsResponseBody>;
    public userPostUserGroupMemberships(id: string, body: PostUserGroupMembershipsRequestBody, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<PostUserGroupMembershipsResponseBody>>;
    public userPostUserGroupMemberships(id: string, body: PostUserGroupMembershipsRequestBody, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<PostUserGroupMembershipsResponseBody>>;
    public userPostUserGroupMemberships(id: string, body: PostUserGroupMembershipsRequestBody, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userPostUserGroupMemberships.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling userPostUserGroupMemberships.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'text/json',
                'application/xml',
                'text/xml'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v2/users/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}/usergroupmemberships`;
        return this.httpClient.request<PostUserGroupMembershipsResponseBody>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: body,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns a paginated list of users
     * @param query 
     * @param page 
     * @param pageSize 
     * @param earliestLastUpdate 
     * @param earliestVersion 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersGet(query: 'LastUpdate' | 'Version', page?: number, pageSize?: number, earliestLastUpdate?: string, earliestVersion?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<Array<UserV2>>;
    public usersGet(query: 'LastUpdate' | 'Version', page?: number, pageSize?: number, earliestLastUpdate?: string, earliestVersion?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Array<UserV2>>>;
    public usersGet(query: 'LastUpdate' | 'Version', page?: number, pageSize?: number, earliestLastUpdate?: string, earliestVersion?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Array<UserV2>>>;
    public usersGet(query: 'LastUpdate' | 'Version', page?: number, pageSize?: number, earliestLastUpdate?: string, earliestVersion?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling usersGet.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (query !== undefined && query !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>query, 'query');
        }
        if (page !== undefined && page !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>page, 'page');
        }
        if (pageSize !== undefined && pageSize !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>pageSize, 'pageSize');
        }
        if (earliestLastUpdate !== undefined && earliestLastUpdate !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>earliestLastUpdate, 'earliestLastUpdate');
        }
        if (earliestVersion !== undefined && earliestVersion !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>earliestVersion, 'earliestVersion');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'text/json',
                'application/xml',
                'text/xml'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v2/users`;
        return this.httpClient.request<Array<UserV2>>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

}

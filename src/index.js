/**
 * Lagrello API
 * API specification for Lagrello, a simple to use authentication service
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@lagrello.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import ActivateTenantRequest from './model/ActivateTenantRequest';
import CreateTenantRequest from './model/CreateTenantRequest';
import CreateTokenRequest from './model/CreateTokenRequest';
import CreateUserRequest from './model/CreateUserRequest';
import Error from './model/Error';
import Paging from './model/Paging';
import Tenant from './model/Tenant';
import TenantCompanyInfo from './model/TenantCompanyInfo';
import Token from './model/Token';
import TokenList from './model/TokenList';
import TotpEnableRequest from './model/TotpEnableRequest';
import TotpEnableResponse from './model/TotpEnableResponse';
import UpdateTenantRequest from './model/UpdateTenantRequest';
import UpdateUserRequest from './model/UpdateUserRequest';
import User from './model/User';
import AuthApi from './api/AuthApi';
import ImagesApi from './api/ImagesApi';
import InternalApi from './api/InternalApi';
import TenantsApi from './api/TenantsApi';
import TokensApi from './api/TokensApi';
import UsersApi from './api/UsersApi';


/**
* API_specification_for_Lagrello_a_simple_to_use_authentication_service.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var LagrelloApi = require('index'); // See note below*.
* var xxxSvc = new LagrelloApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new LagrelloApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new LagrelloApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new LagrelloApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ActivateTenantRequest model constructor.
     * @property {module:model/ActivateTenantRequest}
     */
    ActivateTenantRequest,

    /**
     * The CreateTenantRequest model constructor.
     * @property {module:model/CreateTenantRequest}
     */
    CreateTenantRequest,

    /**
     * The CreateTokenRequest model constructor.
     * @property {module:model/CreateTokenRequest}
     */
    CreateTokenRequest,

    /**
     * The CreateUserRequest model constructor.
     * @property {module:model/CreateUserRequest}
     */
    CreateUserRequest,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The Paging model constructor.
     * @property {module:model/Paging}
     */
    Paging,

    /**
     * The Tenant model constructor.
     * @property {module:model/Tenant}
     */
    Tenant,

    /**
     * The TenantCompanyInfo model constructor.
     * @property {module:model/TenantCompanyInfo}
     */
    TenantCompanyInfo,

    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token,

    /**
     * The TokenList model constructor.
     * @property {module:model/TokenList}
     */
    TokenList,

    /**
     * The TotpEnableRequest model constructor.
     * @property {module:model/TotpEnableRequest}
     */
    TotpEnableRequest,

    /**
     * The TotpEnableResponse model constructor.
     * @property {module:model/TotpEnableResponse}
     */
    TotpEnableResponse,

    /**
     * The UpdateTenantRequest model constructor.
     * @property {module:model/UpdateTenantRequest}
     */
    UpdateTenantRequest,

    /**
     * The UpdateUserRequest model constructor.
     * @property {module:model/UpdateUserRequest}
     */
    UpdateUserRequest,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The ImagesApi service constructor.
    * @property {module:api/ImagesApi}
    */
    ImagesApi,

    /**
    * The InternalApi service constructor.
    * @property {module:api/InternalApi}
    */
    InternalApi,

    /**
    * The TenantsApi service constructor.
    * @property {module:api/TenantsApi}
    */
    TenantsApi,

    /**
    * The TokensApi service constructor.
    * @property {module:api/TokensApi}
    */
    TokensApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};

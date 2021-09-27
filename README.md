# lagrello_api

LagrelloApi - JavaScript client for lagrello_api
API specification for Lagrello, a simple to use authentication service
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install lagrello_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your lagrello_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var LagrelloApi = require('lagrello_api');

var defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
var token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

var api = new LagrelloApi.AuthApi()
var payload = "payload_example"; // {String} The magic link token the user sent
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.usersEmailAuth(payload, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.lagrello.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LagrelloApi.AuthApi* | [**usersEmailAuth**](docs/AuthApi.md#usersEmailAuth) | **GET** /v1/users/email | Gives back user data for the magic link token
*LagrelloApi.AuthApi* | [**usersEmailSend**](docs/AuthApi.md#usersEmailSend) | **POST** /v1/users/{userId}/email | This endpoint will be used when you want to send a magic login link to specified user
*LagrelloApi.AuthApi* | [**usersTotpAuth**](docs/AuthApi.md#usersTotpAuth) | **GET** /v1/users/{userId}/totp | Verify users TOTP token
*LagrelloApi.AuthApi* | [**usersTotpToggle**](docs/AuthApi.md#usersTotpToggle) | **POST** /v1/users/{userId}/totp | Enables or disables Time-based One-Time Password authentication method for specified user
*LagrelloApi.ImagesApi* | [**imagesTotp**](docs/ImagesApi.md#imagesTotp) | **GET** /v1/images/totp | Returns a generated QR code
*LagrelloApi.InternalApi* | [**tenantsCardtoken**](docs/InternalApi.md#tenantsCardtoken) | **GET** /v1/tenant/cardtoken | Returns token that is used by stripe to save card number.
*LagrelloApi.TenantsApi* | [**tenantUpdate**](docs/TenantsApi.md#tenantUpdate) | **PATCH** /v1/tenant | Updates tenant information
*LagrelloApi.TenantsApi* | [**tenantsActivate**](docs/TenantsApi.md#tenantsActivate) | **POST** /v1/tenant/activate | Activates the tenant, checks that all necessary information to activate a tenant is included
*LagrelloApi.TenantsApi* | [**tenantsCreate**](docs/TenantsApi.md#tenantsCreate) | **POST** /v1/tenant | Creates new tenant
*LagrelloApi.TenantsApi* | [**tenantsCreate_0**](docs/TenantsApi.md#tenantsCreate_0) | **DELETE** /v1/tenant | Deletes tenant caller is part of, will send verification email before deleting tenant
*LagrelloApi.TenantsApi* | [**tenantsGet**](docs/TenantsApi.md#tenantsGet) | **GET** /v1/tenant | Returns the tenant information the caller is part of
*LagrelloApi.TokensApi* | [**tokensCreate**](docs/TokensApi.md#tokensCreate) | **POST** /v1/tokens | Creates new token
*LagrelloApi.TokensApi* | [**tokensDelete**](docs/TokensApi.md#tokensDelete) | **DELETE** /v1/tokens/{id} | Deletes specifed access token
*LagrelloApi.TokensApi* | [**tokensList**](docs/TokensApi.md#tokensList) | **GET** /v1/tokens | Returns a list of all active tokens in tenant
*LagrelloApi.UsersApi* | [**usersCreate**](docs/UsersApi.md#usersCreate) | **POST** /v1/users | Creates a user in tenant, tenant is determined from the token
*LagrelloApi.UsersApi* | [**usersDelete**](docs/UsersApi.md#usersDelete) | **DELETE** /v1/users/{userId} | Deletes specified user
*LagrelloApi.UsersApi* | [**usersGet**](docs/UsersApi.md#usersGet) | **GET** /v1/users/{userId} | Returns specified user
*LagrelloApi.UsersApi* | [**usersUpdate**](docs/UsersApi.md#usersUpdate) | **PATCH** /v1/users/{userId} | Updates specified user


## Documentation for Models

 - [LagrelloApi.ActivateTenantRequest](docs/ActivateTenantRequest.md)
 - [LagrelloApi.CreateTenantRequest](docs/CreateTenantRequest.md)
 - [LagrelloApi.CreateTokenRequest](docs/CreateTokenRequest.md)
 - [LagrelloApi.CreateUserRequest](docs/CreateUserRequest.md)
 - [LagrelloApi.Error](docs/Error.md)
 - [LagrelloApi.Paging](docs/Paging.md)
 - [LagrelloApi.Tenant](docs/Tenant.md)
 - [LagrelloApi.TenantCompanyInfo](docs/TenantCompanyInfo.md)
 - [LagrelloApi.Token](docs/Token.md)
 - [LagrelloApi.TokenList](docs/TokenList.md)
 - [LagrelloApi.TotpEnableRequest](docs/TotpEnableRequest.md)
 - [LagrelloApi.TotpEnableResponse](docs/TotpEnableResponse.md)
 - [LagrelloApi.UpdateTenantRequest](docs/UpdateTenantRequest.md)
 - [LagrelloApi.UpdateUserRequest](docs/UpdateUserRequest.md)
 - [LagrelloApi.User](docs/User.md)


## Documentation for Authorization



### token

- **Type**: Bearer authentication

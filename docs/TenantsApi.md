# LagrelloApi.TenantsApi

All URIs are relative to *https://api.lagrello.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantUpdate**](TenantsApi.md#tenantUpdate) | **PATCH** /v1/tenant | Updates tenant information
[**tenantsActivate**](TenantsApi.md#tenantsActivate) | **POST** /v1/tenant/activate | Activates the tenant, checks that all necessary information to activate a tenant is included
[**tenantsCreate**](TenantsApi.md#tenantsCreate) | **POST** /v1/tenant | Creates new tenant
[**tenantsCreate_0**](TenantsApi.md#tenantsCreate_0) | **DELETE** /v1/tenant | Deletes tenant caller is part of, will send verification email before deleting tenant
[**tenantsGet**](TenantsApi.md#tenantsGet) | **GET** /v1/tenant | Returns the tenant information the caller is part of



## tenantUpdate

> Tenant tenantUpdate(opts)

Updates tenant information

This endpoint is used to update certain information about your tenant. For example if you want to update your tenant&#39;s callback URL you will do that here.

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.TenantsApi();
let opts = {
  'updateTenantRequest': new LagrelloApi.UpdateTenantRequest() // UpdateTenantRequest | 
};
apiInstance.tenantUpdate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTenantRequest** | [**UpdateTenantRequest**](UpdateTenantRequest.md)|  | [optional] 

### Return type

[**Tenant**](Tenant.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tenantsActivate

> Tenant tenantsActivate(opts)

Activates the tenant, checks that all necessary information to activate a tenant is included

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.TenantsApi();
let opts = {
  'activateTenantRequest': new LagrelloApi.ActivateTenantRequest() // ActivateTenantRequest | 
};
apiInstance.tenantsActivate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activateTenantRequest** | [**ActivateTenantRequest**](ActivateTenantRequest.md)|  | [optional] 

### Return type

[**Tenant**](Tenant.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tenantsCreate

> Tenant tenantsCreate(opts)

Creates new tenant

### Example

```javascript
import LagrelloApi from 'lagrello_api';

let apiInstance = new LagrelloApi.TenantsApi();
let opts = {
  'createTenantRequest': new LagrelloApi.CreateTenantRequest() // CreateTenantRequest | 
};
apiInstance.tenantsCreate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTenantRequest** | [**CreateTenantRequest**](CreateTenantRequest.md)|  | [optional] 

### Return type

[**Tenant**](Tenant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tenantsCreate_0

> Tenant tenantsCreate_0()

Deletes tenant caller is part of, will send verification email before deleting tenant

This endpoint will delete your tenant. Will send an email to the admin email address of the tenant confirming that you want to delete your tenant before deletion.

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.TenantsApi();
apiInstance.tenantsCreate_0((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Tenant**](Tenant.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tenantsGet

> Tenant tenantsGet()

Returns the tenant information the caller is part of

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.TenantsApi();
apiInstance.tenantsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Tenant**](Tenant.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


# LagrelloApi.UsersApi

All URIs are relative to *https://api.lagrello.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersCreate**](UsersApi.md#usersCreate) | **POST** /v1/users | Creates a user in tenant, tenant is determined from the token
[**usersDelete**](UsersApi.md#usersDelete) | **DELETE** /v1/users/{userId} | Deletes specified user
[**usersGet**](UsersApi.md#usersGet) | **GET** /v1/users/{userId} | Returns specified user
[**usersUpdate**](UsersApi.md#usersUpdate) | **PATCH** /v1/users/{userId} | Updates specified user



## usersCreate

> User usersCreate(opts)

Creates a user in tenant, tenant is determined from the token

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.UsersApi();
let opts = {
  'createUserRequest': new LagrelloApi.CreateUserRequest() // CreateUserRequest | 
};
apiInstance.usersCreate(opts, (error, data, response) => {
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
 **createUserRequest** | [**CreateUserRequest**](CreateUserRequest.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersDelete

> usersDelete(userId)

Deletes specified user

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.UsersApi();
let userId = "userId_example"; // String | Id of the user you want to delete
apiInstance.usersDelete(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| Id of the user you want to delete | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersGet

> User usersGet(userId)

Returns specified user

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.UsersApi();
let userId = "userId_example"; // String | userId of user you want to fetch information about
apiInstance.usersGet(userId, (error, data, response) => {
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
 **userId** | **String**| userId of user you want to fetch information about | 

### Return type

[**User**](User.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersUpdate

> User usersUpdate(userId, opts)

Updates specified user

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.UsersApi();
let userId = "userId_example"; // String | Id of the user you want to update
let opts = {
  'updateUserRequest': new LagrelloApi.UpdateUserRequest() // UpdateUserRequest | 
};
apiInstance.usersUpdate(userId, opts, (error, data, response) => {
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
 **userId** | **String**| Id of the user you want to update | 
 **updateUserRequest** | [**UpdateUserRequest**](UpdateUserRequest.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


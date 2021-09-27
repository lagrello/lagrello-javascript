# LagrelloApi.AuthApi

All URIs are relative to *https://api.lagrello.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersEmailAuth**](AuthApi.md#usersEmailAuth) | **GET** /v1/users/email | Gives back user data for the magic link token
[**usersEmailSend**](AuthApi.md#usersEmailSend) | **POST** /v1/users/{userId}/email | This endpoint will be used when you want to send a magic login link to specified user
[**usersTotpAuth**](AuthApi.md#usersTotpAuth) | **GET** /v1/users/{userId}/totp | Verify users TOTP token
[**usersTotpToggle**](AuthApi.md#usersTotpToggle) | **POST** /v1/users/{userId}/totp | Enables or disables Time-based One-Time Password authentication method for specified user



## usersEmailAuth

> User usersEmailAuth(payload)

Gives back user data for the magic link token

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.AuthApi();
let payload = "payload_example"; // String | The magic link token the user sent
apiInstance.usersEmailAuth(payload, (error, data, response) => {
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
 **payload** | **String**| The magic link token the user sent | 

### Return type

[**User**](User.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersEmailSend

> usersEmailSend(userId)

This endpoint will be used when you want to send a magic login link to specified user

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.AuthApi();
let userId = "userId_example"; // String | Id of the user you want to send magic link to
apiInstance.usersEmailSend(userId, (error, data, response) => {
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
 **userId** | **String**| Id of the user you want to send magic link to | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersTotpAuth

> User usersTotpAuth(userId, payload)

Verify users TOTP token

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.AuthApi();
let userId = "userId_example"; // String | Id of the user you want to verify TOTP code for
let payload = "payload_example"; // String | The totp token the user sent
apiInstance.usersTotpAuth(userId, payload, (error, data, response) => {
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
 **userId** | **String**| Id of the user you want to verify TOTP code for | 
 **payload** | **String**| The totp token the user sent | 

### Return type

[**User**](User.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersTotpToggle

> TotpEnableResponse usersTotpToggle(userId, opts)

Enables or disables Time-based One-Time Password authentication method for specified user

When you want your users to be able to use TOTP authentication you need to send enable set to true as payload to this endpoint. To turn off TOTP set enable to false. When enabling you will recieve the secret key and a QR code link. The QR code you need to show your user for them to scan.

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.AuthApi();
let userId = "userId_example"; // String | Id of the user you want to enable TOTP for
let opts = {
  'totpEnableRequest': new LagrelloApi.TotpEnableRequest() // TotpEnableRequest | 
};
apiInstance.usersTotpToggle(userId, opts, (error, data, response) => {
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
 **userId** | **String**| Id of the user you want to enable TOTP for | 
 **totpEnableRequest** | [**TotpEnableRequest**](TotpEnableRequest.md)|  | [optional] 

### Return type

[**TotpEnableResponse**](TotpEnableResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


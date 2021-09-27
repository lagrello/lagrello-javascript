# LagrelloApi.TokensApi

All URIs are relative to *https://api.lagrello.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokensCreate**](TokensApi.md#tokensCreate) | **POST** /v1/tokens | Creates new token
[**tokensDelete**](TokensApi.md#tokensDelete) | **DELETE** /v1/tokens/{id} | Deletes specifed access token
[**tokensList**](TokensApi.md#tokensList) | **GET** /v1/tokens | Returns a list of all active tokens in tenant



## tokensCreate

> Token tokensCreate(opts)

Creates new token

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.TokensApi();
let opts = {
  'createTokenRequest': new LagrelloApi.CreateTokenRequest() // CreateTokenRequest | 
};
apiInstance.tokensCreate(opts, (error, data, response) => {
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
 **createTokenRequest** | [**CreateTokenRequest**](CreateTokenRequest.md)|  | [optional] 

### Return type

[**Token**](Token.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tokensDelete

> tokensDelete(tokenId)

Deletes specifed access token

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.TokensApi();
let tokenId = ffd12fb4-da5b-4751-a9f6-d3214b418139; // String | Id of the token you want to delete
apiInstance.tokensDelete(tokenId, (error, data, response) => {
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
 **tokenId** | **String**| Id of the token you want to delete | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tokensList

> TokenList tokensList(opts)

Returns a list of all active tokens in tenant

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.TokensApi();
let opts = {
  'size': 56, // Number | Maximum of results per page
  'page': 56 // Number | The page you want to see
};
apiInstance.tokensList(opts, (error, data, response) => {
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
 **size** | **Number**| Maximum of results per page | [optional] 
 **page** | **Number**| The page you want to see | [optional] 

### Return type

[**TokenList**](TokenList.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


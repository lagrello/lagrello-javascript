# LagrelloApi.InternalApi

All URIs are relative to *https://api.lagrello.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantsCardtoken**](InternalApi.md#tenantsCardtoken) | **GET** /v1/tenant/cardtoken | Returns token that is used by stripe to save card number.



## tenantsCardtoken

> String tenantsCardtoken()

Returns token that is used by stripe to save card number.

### Example

```javascript
import LagrelloApi from 'lagrello_api';
let defaultClient = LagrelloApi.ApiClient.instance;
// Configure Bearer access token for authorization: token
let token = defaultClient.authentications['token'];
token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LagrelloApi.InternalApi();
apiInstance.tenantsCardtoken((error, data, response) => {
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

**String**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


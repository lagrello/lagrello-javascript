# LagrelloApi.ImagesApi

All URIs are relative to *https://api.lagrello.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imagesTotp**](ImagesApi.md#imagesTotp) | **GET** /v1/images/totp | Returns a generated QR code



## imagesTotp

> File imagesTotp(opts)

Returns a generated QR code

This endpoint does not do any lookups of any sort. It will just generate a QR code from the parameters supplied to it.

### Example

```javascript
import LagrelloApi from 'lagrello_api';

let apiInstance = new LagrelloApi.ImagesApi();
let opts = {
  'tenantName': "tenantName_example", // String | The company name you your users to see in their TOTP application
  'userId': "userId_example", // String | The userId of the user you want to create the TOTP QR image for
  'userSecret': "userSecret_example" // String | The TOTP secret for the specified user
};
apiInstance.imagesTotp(opts, (error, data, response) => {
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
 **tenantName** | **String**| The company name you your users to see in their TOTP application | [optional] 
 **userId** | **String**| The userId of the user you want to create the TOTP QR image for | [optional] 
 **userSecret** | **String**| The TOTP secret for the specified user | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, application/json


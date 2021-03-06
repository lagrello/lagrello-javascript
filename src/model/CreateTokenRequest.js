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

import ApiClient from '../ApiClient';

/**
 * The CreateTokenRequest model module.
 * @module model/CreateTokenRequest
 * @version 1.0.0
 */
class CreateTokenRequest {
    /**
     * Constructs a new <code>CreateTokenRequest</code>.
     * @alias module:model/CreateTokenRequest
     * @param tokenName {String} 
     */
    constructor(tokenName) { 
        
        CreateTokenRequest.initialize(this, tokenName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tokenName) { 
        obj['tokenName'] = tokenName;
    }

    /**
     * Constructs a <code>CreateTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTokenRequest} obj Optional instance to populate.
     * @return {module:model/CreateTokenRequest} The populated <code>CreateTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTokenRequest();

            if (data.hasOwnProperty('tokenName')) {
                obj['tokenName'] = ApiClient.convertToType(data['tokenName'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} tokenName
 */
CreateTokenRequest.prototype['tokenName'] = undefined;

/**
 * @member {Array.<String>} permissions
 */
CreateTokenRequest.prototype['permissions'] = undefined;






export default CreateTokenRequest;


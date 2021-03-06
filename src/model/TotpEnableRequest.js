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
 * The TotpEnableRequest model module.
 * @module model/TotpEnableRequest
 * @version 1.0.0
 */
class TotpEnableRequest {
    /**
     * Constructs a new <code>TotpEnableRequest</code>.
     * request to enable google authenticator method for user
     * @alias module:model/TotpEnableRequest
     * @param enable {Boolean} 
     */
    constructor(enable) { 
        
        TotpEnableRequest.initialize(this, enable);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enable) { 
        obj['enable'] = enable;
    }

    /**
     * Constructs a <code>TotpEnableRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TotpEnableRequest} obj Optional instance to populate.
     * @return {module:model/TotpEnableRequest} The populated <code>TotpEnableRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TotpEnableRequest();

            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enable
 */
TotpEnableRequest.prototype['enable'] = undefined;






export default TotpEnableRequest;


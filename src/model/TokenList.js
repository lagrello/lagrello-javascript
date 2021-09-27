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
import Paging from './Paging';
import Token from './Token';

/**
 * The TokenList model module.
 * @module model/TokenList
 * @version 1.0.0
 */
class TokenList {
    /**
     * Constructs a new <code>TokenList</code>.
     * @alias module:model/TokenList
     * @param data {Array.<module:model/Token>} 
     * @param paging {module:model/Paging} 
     */
    constructor(data, paging) { 
        
        TokenList.initialize(this, data, paging);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data, paging) { 
        obj['data'] = data;
        obj['paging'] = paging;
    }

    /**
     * Constructs a <code>TokenList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenList} obj Optional instance to populate.
     * @return {module:model/TokenList} The populated <code>TokenList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenList();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Token]);
            }
            if (data.hasOwnProperty('paging')) {
                obj['paging'] = Paging.constructFromObject(data['paging']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Token>} data
 */
TokenList.prototype['data'] = undefined;

/**
 * @member {module:model/Paging} paging
 */
TokenList.prototype['paging'] = undefined;






export default TokenList;


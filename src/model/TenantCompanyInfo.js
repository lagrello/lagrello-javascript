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
 * The TenantCompanyInfo model module.
 * @module model/TenantCompanyInfo
 * @version 1.0.0
 */
class TenantCompanyInfo {
    /**
     * Constructs a new <code>TenantCompanyInfo</code>.
     * @alias module:model/TenantCompanyInfo
     * @param name {String} The full name of your company.
     * @param address {String} The first line of the address for your company.
     * @param city {String} The city in which the address is located.
     * @param postalCode {String} The postal code for the address.
     * @param country {String} The country in which the address is located. This should be given as an ISO 3361-1 country code (two letter abbreviation).
     * @param orgNumber {String} Your company's organization number.
     * @param vATNumber {String} A value added tax identification number, identifier used in many countries, including the countries of the European Union, for value added tax purposes.
     */
    constructor(name, address, city, postalCode, country, orgNumber, vATNumber) { 
        
        TenantCompanyInfo.initialize(this, name, address, city, postalCode, country, orgNumber, vATNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, address, city, postalCode, country, orgNumber, vATNumber) { 
        obj['Name'] = name;
        obj['Address'] = address;
        obj['City'] = city;
        obj['PostalCode'] = postalCode;
        obj['Country'] = country;
        obj['OrgNumber'] = orgNumber;
        obj['VATNumber'] = vATNumber;
    }

    /**
     * Constructs a <code>TenantCompanyInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TenantCompanyInfo} obj Optional instance to populate.
     * @return {module:model/TenantCompanyInfo} The populated <code>TenantCompanyInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantCompanyInfo();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Address')) {
                obj['Address'] = ApiClient.convertToType(data['Address'], 'String');
            }
            if (data.hasOwnProperty('City')) {
                obj['City'] = ApiClient.convertToType(data['City'], 'String');
            }
            if (data.hasOwnProperty('PostalCode')) {
                obj['PostalCode'] = ApiClient.convertToType(data['PostalCode'], 'String');
            }
            if (data.hasOwnProperty('Country')) {
                obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
            }
            if (data.hasOwnProperty('OrgNumber')) {
                obj['OrgNumber'] = ApiClient.convertToType(data['OrgNumber'], 'String');
            }
            if (data.hasOwnProperty('VATNumber')) {
                obj['VATNumber'] = ApiClient.convertToType(data['VATNumber'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The full name of your company.
 * @member {String} Name
 */
TenantCompanyInfo.prototype['Name'] = undefined;

/**
 * The first line of the address for your company.
 * @member {String} Address
 */
TenantCompanyInfo.prototype['Address'] = undefined;

/**
 * The city in which the address is located.
 * @member {String} City
 */
TenantCompanyInfo.prototype['City'] = undefined;

/**
 * The postal code for the address.
 * @member {String} PostalCode
 */
TenantCompanyInfo.prototype['PostalCode'] = undefined;

/**
 * The country in which the address is located. This should be given as an ISO 3361-1 country code (two letter abbreviation).
 * @member {String} Country
 */
TenantCompanyInfo.prototype['Country'] = undefined;

/**
 * Your company's organization number.
 * @member {String} OrgNumber
 */
TenantCompanyInfo.prototype['OrgNumber'] = undefined;

/**
 * A value added tax identification number, identifier used in many countries, including the countries of the European Union, for value added tax purposes.
 * @member {String} VATNumber
 */
TenantCompanyInfo.prototype['VATNumber'] = undefined;






export default TenantCompanyInfo;


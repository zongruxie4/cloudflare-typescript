// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class SchemaValidation extends APIResource {
  /**
   * Updates operation-level schema validation settings on the zone
   *
   * @example
   * ```ts
   * const schemaValidation =
   *   await client.apiGateway.operations.schemaValidation.update(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  update(
    operationId: string,
    params: SchemaValidationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemaValidationUpdateResponse> {
    const { zone_id, ...body } = params;
    return this._client.put(`/zones/${zone_id}/api_gateway/operations/${operationId}/schema_validation`, {
      body,
      ...options,
    });
  }

  /**
   * Updates multiple operation-level schema validation settings on the zone
   *
   * @example
   * ```ts
   * const settingsMultipleRequest =
   *   await client.apiGateway.operations.schemaValidation.edit({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     settings_multiple_request: {
   *       '3818d821-5901-4147-a474-f5f5aec1d54e': {},
   *       'b17c8043-99a0-4202-b7d9-8f7cdbee02cd': {},
   *     },
   *   });
   * ```
   */
  edit(
    params: SchemaValidationEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingsMultipleRequest> {
    const { zone_id, settings_multiple_request } = params;
    return (
      this._client.patch(`/zones/${zone_id}/api_gateway/operations/schema_validation`, {
        body: settings_multiple_request,
        ...options,
      }) as Core.APIPromise<{ result: SettingsMultipleRequest }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves operation-level schema validation settings on the zone
   *
   * @example
   * ```ts
   * const schemaValidation =
   *   await client.apiGateway.operations.schemaValidation.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    operationId: string,
    params: SchemaValidationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemaValidationGetResponse> {
    const { zone_id } = params;
    return this._client.get(
      `/zones/${zone_id}/api_gateway/operations/${operationId}/schema_validation`,
      options,
    );
  }
}

export type SettingsMultipleRequest = Record<string, SettingsMultipleRequest.item>;

export namespace SettingsMultipleRequest {
  /**
   * Operation ID to mitigation action mappings
   */
  export interface item {
    /**
     * When set, this applies a mitigation action to this operation
     *
     * - `log` log request when request does not conform to schema for this operation
     * - `block` deny access to the site when request does not conform to schema for
     *   this operation
     * - `none` will skip mitigation for this operation
     * - `null` indicates that no operation level mitigation is in place, see Zone
     *   Level Schema Validation Settings for mitigation action that will be applied
     */
    mitigation_action?: 'log' | 'block' | 'none' | null;
  }
}

export type SettingsMultipleRequestParam = Record<string, SettingsMultipleRequestParam.item>;

export namespace SettingsMultipleRequestParam {
  /**
   * Operation ID to mitigation action mappings
   */
  export interface item {
    /**
     * When set, this applies a mitigation action to this operation
     *
     * - `log` log request when request does not conform to schema for this operation
     * - `block` deny access to the site when request does not conform to schema for
     *   this operation
     * - `none` will skip mitigation for this operation
     * - `null` indicates that no operation level mitigation is in place, see Zone
     *   Level Schema Validation Settings for mitigation action that will be applied
     */
    mitigation_action?: 'log' | 'block' | 'none' | null;
  }
}

export interface SchemaValidationUpdateResponse {
  /**
   * When set, this applies a mitigation action to this operation
   *
   * - `log` log request when request does not conform to schema for this operation
   * - `block` deny access to the site when request does not conform to schema for
   *   this operation
   * - `none` will skip mitigation for this operation
   * - `null` indicates that no operation level mitigation is in place, see Zone
   *   Level Schema Validation Settings for mitigation action that will be applied
   */
  mitigation_action?: 'log' | 'block' | 'none' | null;

  /**
   * UUID.
   */
  operation_id?: string;
}

export interface SchemaValidationGetResponse {
  /**
   * When set, this applies a mitigation action to this operation
   *
   * - `log` log request when request does not conform to schema for this operation
   * - `block` deny access to the site when request does not conform to schema for
   *   this operation
   * - `none` will skip mitigation for this operation
   * - `null` indicates that no operation level mitigation is in place, see Zone
   *   Level Schema Validation Settings for mitigation action that will be applied
   */
  mitigation_action?: 'log' | 'block' | 'none' | null;

  /**
   * UUID.
   */
  operation_id?: string;
}

export interface SchemaValidationUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: When set, this applies a mitigation action to this operation
   *
   * - `log` log request when request does not conform to schema for this operation
   * - `block` deny access to the site when request does not conform to schema for
   *   this operation
   * - `none` will skip mitigation for this operation
   * - `null` indicates that no operation level mitigation is in place, see Zone
   *   Level Schema Validation Settings for mitigation action that will be applied
   */
  mitigation_action?: 'log' | 'block' | 'none' | null;
}

export interface SchemaValidationEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param:
   */
  settings_multiple_request: SettingsMultipleRequestParam;
}

export interface SchemaValidationGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace SchemaValidation {
  export {
    type SettingsMultipleRequest as SettingsMultipleRequest,
    type SchemaValidationUpdateResponse as SchemaValidationUpdateResponse,
    type SchemaValidationGetResponse as SchemaValidationGetResponse,
    type SchemaValidationUpdateParams as SchemaValidationUpdateParams,
    type SchemaValidationEditParams as SchemaValidationEditParams,
    type SchemaValidationGetParams as SchemaValidationGetParams,
  };
}

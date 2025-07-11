// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class ForceAXFRResource extends APIResource {
  /**
   * Sends AXFR zone transfer request to primary nameserver(s).
   *
   * @example
   * ```ts
   * const forceAXFR =
   *   await client.dns.zoneTransfers.forceAXFR.create({
   *     zone_id: '269d8f4853475ca241c4e730be286b20',
   *     body: {},
   *   });
   * ```
   */
  create(params: ForceAXFRCreateParams, options?: Core.RequestOptions): Core.APIPromise<ForceAXFR> {
    const { zone_id, body } = params;
    return (
      this._client.post(`/zones/${zone_id}/secondary_dns/force_axfr`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ForceAXFR }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When force_axfr query parameter is set to true, the response is a simple string
 */
export type ForceAXFR = string;

export interface ForceAXFRCreateParams {
  /**
   * Path param:
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export declare namespace ForceAXFRResource {
  export { type ForceAXFR as ForceAXFR, type ForceAXFRCreateParams as ForceAXFRCreateParams };
}

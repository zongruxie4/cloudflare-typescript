// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class ReverseDNS extends APIResource {
  /**
   * Update reverse DNS configuration (PTR records) for a DNS Firewall cluster
   *
   * @example
   * ```ts
   * const response = await client.dnsFirewall.reverseDNS.edit(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  edit(
    dnsFirewallId: string,
    params: ReverseDNSEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReverseDNSEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/dns_firewall/${dnsFirewallId}/reverse_dns`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ReverseDNSEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show reverse DNS configuration (PTR records) for a DNS Firewall cluster
   *
   * @example
   * ```ts
   * const reverseDNS = await client.dnsFirewall.reverseDNS.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    dnsFirewallId: string,
    params: ReverseDNSGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReverseDNSGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dns_firewall/${dnsFirewallId}/reverse_dns`,
        options,
      ) as Core.APIPromise<{ result: ReverseDNSGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ReverseDNSEditResponse {
  /**
   * Map of cluster IP addresses to PTR record contents
   */
  ptr: { [key: string]: string };
}

export interface ReverseDNSGetResponse {
  /**
   * Map of cluster IP addresses to PTR record contents
   */
  ptr: { [key: string]: string };
}

export interface ReverseDNSEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Map of cluster IP addresses to PTR record contents
   */
  ptr?: { [key: string]: string };
}

export interface ReverseDNSGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace ReverseDNS {
  export {
    type ReverseDNSEditResponse as ReverseDNSEditResponse,
    type ReverseDNSGetResponse as ReverseDNSGetResponse,
    type ReverseDNSEditParams as ReverseDNSEditParams,
    type ReverseDNSGetParams as ReverseDNSGetParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource overrideCodes', () => {
  // TODO: investigate prism error for invalid security scheme used
  test.skip('list: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.overrideCodes.list(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate prism error for invalid security scheme used
  test.skip('list: required and optional params', async () => {
    const response = await client.zeroTrust.devices.overrideCodes.list(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
  });

  // TODO: investigate prism error for invalid security scheme used
  test.skip('get: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.overrideCodes.get('registration_id', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate prism error for invalid security scheme used
  test.skip('get: required and optional params', async () => {
    const response = await client.zeroTrust.devices.overrideCodes.get('registration_id', {
      account_id: 'account_id',
    });
  });
});

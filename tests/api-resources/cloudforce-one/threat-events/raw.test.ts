// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource raw', () => {
  // TODO: HTTP 401 from prism
  test.skip('edit: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.raw.edit('event_id', 'raw_id', {
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

  // TODO: HTTP 401 from prism
  test.skip('edit: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.raw.edit('event_id', 'raw_id', {
      account_id: 'account_id',
      data: {},
      source: 'example.com',
      tlp: 'amber',
    });
  });

  // TODO: HTTP 401 from prism
  test.skip('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatEvents.raw.get('event_id', 'raw_id', {
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

  // TODO: HTTP 401 from prism
  test.skip('get: required and optional params', async () => {
    const response = await client.cloudforceOne.threatEvents.raw.get('event_id', 'raw_id', {
      account_id: 'account_id',
    });
  });
});

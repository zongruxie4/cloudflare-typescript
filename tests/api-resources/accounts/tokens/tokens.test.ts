// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tokens', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.accounts.tokens.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'readonly token',
      policies: [
        {
          effect: 'allow',
          permission_groups: [
            { id: 'c8fed203ed3043cba015a93ad1616f1f' },
            { id: '82e64a83756745bbbb1c9c2701bf816b' },
          ],
          resources: { foo: 'string' },
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('create: required and optional params', async () => {
    const response = await client.accounts.tokens.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'readonly token',
      policies: [
        {
          effect: 'allow',
          permission_groups: [
            { id: 'c8fed203ed3043cba015a93ad1616f1f', meta: { key: 'key', value: 'value' } },
            { id: '82e64a83756745bbbb1c9c2701bf816b', meta: { key: 'key', value: 'value' } },
          ],
          resources: { foo: 'string' },
        },
      ],
      condition: {
        request_ip: {
          in: ['123.123.123.0/24', '2606:4700::/32'],
          not_in: ['123.123.123.100/24', '2606:4700:4700::/48'],
        },
      },
      expires_on: '2020-01-01T00:00:00Z',
      not_before: '2018-07-01T05:20:00Z',
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.accounts.tokens.update('ed17574386854bf78a67040be0a770b0', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'readonly token',
      policies: [
        {
          effect: 'allow',
          permission_groups: [
            { id: 'c8fed203ed3043cba015a93ad1616f1f' },
            { id: '82e64a83756745bbbb1c9c2701bf816b' },
          ],
          resources: { foo: 'string' },
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.accounts.tokens.update('ed17574386854bf78a67040be0a770b0', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'readonly token',
      policies: [
        {
          effect: 'allow',
          permission_groups: [
            { id: 'c8fed203ed3043cba015a93ad1616f1f', meta: { key: 'key', value: 'value' } },
            { id: '82e64a83756745bbbb1c9c2701bf816b', meta: { key: 'key', value: 'value' } },
          ],
          resources: { foo: 'string' },
        },
      ],
      condition: {
        request_ip: {
          in: ['123.123.123.0/24', '2606:4700::/32'],
          not_in: ['123.123.123.100/24', '2606:4700:4700::/48'],
        },
      },
      expires_on: '2020-01-01T00:00:00Z',
      not_before: '2018-07-01T05:20:00Z',
      status: 'active',
    });
  });

  // TODO: investigate broken test
  test.skip('list: only required params', async () => {
    const responsePromise = client.accounts.tokens.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('list: required and optional params', async () => {
    const response = await client.accounts.tokens.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'desc',
      page: 1,
      per_page: 5,
    });
  });

  // TODO: investigate broken test
  test.skip('delete: only required params', async () => {
    const responsePromise = client.accounts.tokens.delete('ed17574386854bf78a67040be0a770b0', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('delete: required and optional params', async () => {
    const response = await client.accounts.tokens.delete('ed17574386854bf78a67040be0a770b0', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: investigate broken test
  test.skip('get: only required params', async () => {
    const responsePromise = client.accounts.tokens.get('ed17574386854bf78a67040be0a770b0', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('get: required and optional params', async () => {
    const response = await client.accounts.tokens.get('ed17574386854bf78a67040be0a770b0', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: investigate broken test
  test.skip('verify: only required params', async () => {
    const responsePromise = client.accounts.tokens.verify({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('verify: required and optional params', async () => {
    const response = await client.accounts.tokens.verify({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});

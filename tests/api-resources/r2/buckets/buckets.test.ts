// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource buckets', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.r2.buckets.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example-bucket',
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
    const response = await client.r2.buckets.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example-bucket',
      locationHint: 'apac',
      storageClass: 'Standard',
      jurisdiction: 'default',
    });
  });

  // TODO: investigate broken test
  test.skip('list: only required params', async () => {
    const responsePromise = client.r2.buckets.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
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
    const response = await client.r2.buckets.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cursor: 'cursor',
      direction: 'desc',
      name_contains: 'my-bucket',
      order: 'name',
      per_page: 1,
      start_after: 'my-bucket',
      jurisdiction: 'default',
    });
  });

  // TODO: investigate broken test
  test.skip('delete: only required params', async () => {
    const responsePromise = client.r2.buckets.delete('example-bucket', {
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
    const response = await client.r2.buckets.delete('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      jurisdiction: 'default',
    });
  });

  // TODO: investigate broken test
  test.skip('edit: only required params', async () => {
    const responsePromise = client.r2.buckets.edit('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      storage_class: 'Standard',
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
  test.skip('edit: required and optional params', async () => {
    const response = await client.r2.buckets.edit('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      storage_class: 'Standard',
      jurisdiction: 'default',
    });
  });

  // TODO: investigate broken test
  test.skip('get: only required params', async () => {
    const responsePromise = client.r2.buckets.get('example-bucket', {
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
    const response = await client.r2.buckets.get('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      jurisdiction: 'default',
    });
  });
});

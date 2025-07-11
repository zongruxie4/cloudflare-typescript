// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dexTests', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.dexTests.create({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      data: {},
      enabled: true,
      interval: '30m',
      name: 'HTTP dash health check',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.devices.dexTests.create({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      data: { host: 'https://dash.cloudflare.com', kind: 'http', method: 'GET' },
      enabled: true,
      interval: '30m',
      name: 'HTTP dash health check',
      description: 'Checks the dash endpoint every 30 minutes',
      target_policies: [{ id: 'id', default: true, name: 'name' }],
      targeted: true,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.dexTests.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
      data: {},
      enabled: true,
      interval: '30m',
      name: 'HTTP dash health check',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.devices.dexTests.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
      data: { host: 'https://dash.cloudflare.com', kind: 'http', method: 'GET' },
      enabled: true,
      interval: '30m',
      name: 'HTTP dash health check',
      description: 'Checks the dash endpoint every 30 minutes',
      target_policies: [{ id: 'id', default: true, name: 'name' }],
      targeted: true,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.dexTests.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.devices.dexTests.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.dexTests.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zeroTrust.devices.dexTests.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.dexTests.get('372e67954025e0ba6aaa6d586b9e0b59', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.devices.dexTests.get('372e67954025e0ba6aaa6d586b9e0b59', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
  });
});

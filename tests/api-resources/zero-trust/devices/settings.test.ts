// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource settings', () => {
  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.settings.update({
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.devices.settings.update({
      account_id: '699d98642c564d2e855e9661899b7252',
      disable_for_time: 0,
      gateway_proxy_enabled: true,
      gateway_udp_proxy_enabled: true,
      root_certificate_installation_enabled: true,
      use_zt_virtual_ip: true,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.settings.delete({
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.devices.settings.delete({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.settings.edit({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.zeroTrust.devices.settings.edit({
      account_id: '699d98642c564d2e855e9661899b7252',
      disable_for_time: 0,
      gateway_proxy_enabled: true,
      gateway_udp_proxy_enabled: true,
      root_certificate_installation_enabled: true,
      use_zt_virtual_ip: true,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.settings.get({
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.devices.settings.get({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
});

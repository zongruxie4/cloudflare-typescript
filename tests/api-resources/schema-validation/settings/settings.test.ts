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
    const responsePromise = client.schemaValidation.settings.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      validation_default_mitigation_action: 'block',
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
    const response = await client.schemaValidation.settings.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      validation_default_mitigation_action: 'block',
      validation_override_mitigation_action: 'none',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.schemaValidation.settings.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.schemaValidation.settings.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      validation_default_mitigation_action: 'block',
      validation_override_mitigation_action: 'none',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.schemaValidation.settings.get({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.schemaValidation.settings.get({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});

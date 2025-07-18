// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource records', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.dns.records.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.com',
      ttl: 3600,
      type: 'A',
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
    const response = await client.dns.records.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.com',
      ttl: 3600,
      type: 'A',
      comment: 'Domain verification record',
      content: '198.51.100.4',
      proxied: true,
      settings: { ipv4_only: true, ipv6_only: true },
      tags: ['owner:dns-team'],
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.dns.records.update('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.com',
      ttl: 3600,
      type: 'A',
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
    const response = await client.dns.records.update('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.com',
      ttl: 3600,
      type: 'A',
      comment: 'Domain verification record',
      content: '198.51.100.4',
      proxied: true,
      settings: { ipv4_only: true, ipv6_only: true },
      tags: ['owner:dns-team'],
    });
  });

  // mock server returns invalid data
  test.skip('list: only required params', async () => {
    const responsePromise = client.dns.records.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // mock server returns invalid data
  test.skip('list: required and optional params', async () => {
    const response = await client.dns.records.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      comment: {
        absent: 'absent',
        contains: 'ello, worl',
        endswith: 'o, world',
        exact: 'Hello, world',
        present: 'present',
        startswith: 'Hello, w',
      },
      content: { contains: '7.0.0.', endswith: '.0.1', exact: '127.0.0.1', startswith: '127.0.' },
      direction: 'asc',
      match: 'any',
      name: {
        contains: 'w.example.',
        endswith: '.example.com',
        exact: 'www.example.com',
        startswith: 'www.example',
      },
      order: 'type',
      page: 1,
      per_page: 5,
      proxied: true,
      search: 'www.cloudflare.com',
      tag: {
        absent: 'important',
        contains: 'greeting:ello, worl',
        endswith: 'greeting:o, world',
        exact: 'greeting:Hello, world',
        present: 'important',
        startswith: 'greeting:Hello, w',
      },
      tag_match: 'any',
      type: 'A',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.dns.records.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('delete: required and optional params', async () => {
    const response = await client.dns.records.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: investigate auth errors on test suite
  test.skip('batch: only required params', async () => {
    const responsePromise = client.dns.records.batch({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate auth errors on test suite
  test.skip('batch: required and optional params', async () => {
    const response = await client.dns.records.batch({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      deletes: [{ id: '023e105f4ecef8ad9ca31a8372d0c353' }],
      patches: [
        {
          name: 'example.com',
          ttl: 3600,
          type: 'A',
          comment: 'Domain verification record',
          content: '198.51.100.4',
          proxied: true,
          settings: { ipv4_only: true, ipv6_only: true },
          tags: ['owner:dns-team'],
          id: '023e105f4ecef8ad9ca31a8372d0c353',
        },
      ],
      posts: [
        {
          name: 'example.com',
          ttl: 3600,
          type: 'A',
          comment: 'Domain verification record',
          content: '198.51.100.4',
          proxied: true,
          settings: { ipv4_only: true, ipv6_only: true },
          tags: ['owner:dns-team'],
        },
      ],
      puts: [
        {
          name: 'example.com',
          ttl: 3600,
          type: 'A',
          comment: 'Domain verification record',
          content: '198.51.100.4',
          proxied: true,
          settings: { ipv4_only: true, ipv6_only: true },
          tags: ['owner:dns-team'],
          id: '023e105f4ecef8ad9ca31a8372d0c353',
        },
      ],
    });
  });

  // TODO: investigate broken test
  test.skip('edit: only required params', async () => {
    const responsePromise = client.dns.records.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.com',
      ttl: 3600,
      type: 'A',
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
    const response = await client.dns.records.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.com',
      ttl: 3600,
      type: 'A',
      comment: 'Domain verification record',
      content: '198.51.100.4',
      proxied: true,
      settings: { ipv4_only: true, ipv6_only: true },
      tags: ['owner:dns-team'],
    });
  });

  test('export: only required params', async () => {
    const responsePromise = client.dns.records.export({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('export: required and optional params', async () => {
    const response = await client.dns.records.export({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  // mock server returns invalid data
  test.skip('get: only required params', async () => {
    const responsePromise = client.dns.records.get('023e105f4ecef8ad9ca31a8372d0c353', {
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

  // mock server returns invalid data
  test.skip('get: required and optional params', async () => {
    const response = await client.dns.records.get('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: investigate broken test
  test.skip('import: only required params', async () => {
    const responsePromise = client.dns.records.import({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      file: 'www.example.com. 300 IN  A 127.0.0.1',
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
  test.skip('import: required and optional params', async () => {
    const response = await client.dns.records.import({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      file: 'www.example.com. 300 IN  A 127.0.0.1',
      proxied: 'true',
    });
  });

  test('scan: only required params', async () => {
    const responsePromise = client.dns.records.scan({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('scan: required and optional params', async () => {
    const response = await client.dns.records.scan({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', body: {} });
  });
});

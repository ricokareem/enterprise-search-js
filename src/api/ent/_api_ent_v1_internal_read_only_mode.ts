/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// This file was automatically generated by elastic/elastic-client-generator-js
// DO NOT MODIFY IT BY HAND. Instead, modify the source open api file,
// and elastic/elastic-client-generator-js to regenerate this file again.

import {
  Transport,
  TransportRequestParams,
  TransportRequestOptions,
  TransportRequestOptionsWithMeta,
  TransportRequestOptionsWithOutMeta,
  TransportResult
} from '@elastic/transport'
interface That { transport: Transport }

export interface GetReadOnlyResponse {
  enabled: boolean
}

/** Get the read-only flag's state */
export async function getReadOnly (this: That, opts?: any, transportOptions?: TransportRequestOptionsWithOutMeta): Promise<GetReadOnlyResponse>
export async function getReadOnly (this: That, opts?: any, transportOptions?: TransportRequestOptionsWithMeta): Promise<TransportResult<GetReadOnlyResponse, unknown>>
export async function getReadOnly (this: That, opts?: any, transportOptions?: TransportRequestOptions): Promise<GetReadOnlyResponse>
export async function getReadOnly (this: That, opts = {}, transportOptions?: TransportRequestOptions): Promise<any> {
  const params: TransportRequestParams = {
    method: 'GET',
    path: '/api/ent/v1/internal/read_only_mode'
  }

  return await this.transport.request<GetReadOnlyResponse>(params, transportOptions)
}

export interface PutReadOnlyOptions {
  enabled: boolean
}

export interface PutReadOnlyResponse {
  enabled: boolean
}

/** Update the read-only flag's state */
export async function putReadOnly (this: That, opts: PutReadOnlyOptions, transportOptions?: TransportRequestOptionsWithOutMeta): Promise<PutReadOnlyResponse>
export async function putReadOnly (this: That, opts: PutReadOnlyOptions, transportOptions?: TransportRequestOptionsWithMeta): Promise<TransportResult<PutReadOnlyResponse, unknown>>
export async function putReadOnly (this: That, opts: PutReadOnlyOptions, transportOptions?: TransportRequestOptions): Promise<PutReadOnlyResponse>
export async function putReadOnly (this: That, opts: PutReadOnlyOptions, transportOptions?: TransportRequestOptions): Promise<any> {
  const params: TransportRequestParams = {
    method: 'PUT',
    path: '/api/ent/v1/internal/read_only_mode',
    querystring: {},
    body: {}
  }

  if (opts.enabled !== undefined) (params.body as Record<string, any>).enabled = opts.enabled

  return await this.transport.request<PutReadOnlyResponse>(params, transportOptions)
}

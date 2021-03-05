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

export interface DeleteEngineOptions {
  /**
   * Name of the engine
   */
  engine_name: string
  [k: string]: unknown
}

export interface DeleteEngineResponse {
  [k: string]: unknown
}

/** Delete an engine by name */
export async function deleteEngine (this: That, opts: DeleteEngineOptions, transportOptions?: TransportRequestOptionsWithOutMeta): Promise<DeleteEngineResponse>
export async function deleteEngine (this: That, opts: DeleteEngineOptions, transportOptions?: TransportRequestOptionsWithMeta): Promise<TransportResult<DeleteEngineResponse, unknown>>
export async function deleteEngine (this: That, opts: DeleteEngineOptions, transportOptions?: TransportRequestOptions): Promise<DeleteEngineResponse>
export async function deleteEngine (this: That, opts: DeleteEngineOptions, transportOptions?: TransportRequestOptions): Promise<any> {
  const params: TransportRequestParams = {
    method: 'DELETE',
    path: `/api/as/v1/engines/${encodeURIComponent(opts.engine_name)}`,
    querystring: {},
    body: {}
  }

  return await this.transport.request<DeleteEngineResponse>(params, transportOptions)
}

export interface GetEngineOptions {
  /**
   * Name of the engine
   */
  engine_name: string
  [k: string]: unknown
}

export interface GetEngineResponse {
  [k: string]: unknown
}

/** Retrieves an engine by name */
export async function getEngine (this: That, opts: GetEngineOptions, transportOptions?: TransportRequestOptionsWithOutMeta): Promise<GetEngineResponse>
export async function getEngine (this: That, opts: GetEngineOptions, transportOptions?: TransportRequestOptionsWithMeta): Promise<TransportResult<GetEngineResponse, unknown>>
export async function getEngine (this: That, opts: GetEngineOptions, transportOptions?: TransportRequestOptions): Promise<GetEngineResponse>
export async function getEngine (this: That, opts: GetEngineOptions, transportOptions?: TransportRequestOptions): Promise<any> {
  const params: TransportRequestParams = {
    method: 'GET',
    path: `/api/as/v1/engines/${encodeURIComponent(opts.engine_name)}`,
    querystring: {}
  }

  return await this.transport.request<GetEngineResponse>(params, transportOptions)
}

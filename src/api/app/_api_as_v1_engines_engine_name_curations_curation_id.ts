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

export interface DeleteCurationOptions {
  /**
   * Name of the engine
   */
  engine_name: string
  /**
   * Curation ID
   */
  curation_id: string
  [k: string]: unknown
}

export interface DeleteCurationResponse {
  [k: string]: unknown
}

/** Delete a curation by ID */
export async function deleteCuration (this: That, opts: DeleteCurationOptions, transportOptions?: TransportRequestOptionsWithOutMeta): Promise<DeleteCurationResponse>
export async function deleteCuration (this: That, opts: DeleteCurationOptions, transportOptions?: TransportRequestOptionsWithMeta): Promise<TransportResult<DeleteCurationResponse, unknown>>
export async function deleteCuration (this: That, opts: DeleteCurationOptions, transportOptions?: TransportRequestOptions): Promise<DeleteCurationResponse>
export async function deleteCuration (this: That, opts: DeleteCurationOptions, transportOptions?: TransportRequestOptions): Promise<any> {
  const params: TransportRequestParams = {
    method: 'DELETE',
    path: `/api/as/v1/engines/${encodeURIComponent(opts.engine_name)}/curations/${encodeURIComponent(opts.curation_id)}`,
    querystring: {},
    body: {}
  }

  return await this.transport.request<DeleteCurationResponse>(params, transportOptions)
}

export interface GetCurationOptions {
  /**
   * Name of the engine
   */
  engine_name: string
  /**
   * Curation ID
   */
  curation_id: string
  [k: string]: unknown
}

export interface GetCurationResponse {
  [k: string]: unknown
}

/** Retrieve a curation by ID */
export async function getCuration (this: That, opts: GetCurationOptions, transportOptions?: TransportRequestOptionsWithOutMeta): Promise<GetCurationResponse>
export async function getCuration (this: That, opts: GetCurationOptions, transportOptions?: TransportRequestOptionsWithMeta): Promise<TransportResult<GetCurationResponse, unknown>>
export async function getCuration (this: That, opts: GetCurationOptions, transportOptions?: TransportRequestOptions): Promise<GetCurationResponse>
export async function getCuration (this: That, opts: GetCurationOptions, transportOptions?: TransportRequestOptions): Promise<any> {
  const params: TransportRequestParams = {
    method: 'GET',
    path: `/api/as/v1/engines/${encodeURIComponent(opts.engine_name)}/curations/${encodeURIComponent(opts.curation_id)}`,
    querystring: {}
  }

  return await this.transport.request<GetCurationResponse>(params, transportOptions)
}

export interface PutCurationOptions {
  /**
   * Name of the engine
   */
  engine_name: string
  /**
   * Curation ID
   */
  curation_id: string
  /**
   * List of affected search queries
   */
  queries: string[]
  /**
   * List of promoted document IDs
   */
  promotedDocIds?: string[]
  /**
   * List of hidden document IDs
   */
  hiddenDocIds?: string[]
  [k: string]: unknown
}

export interface PutCurationResponse {
  [k: string]: unknown
}

/** Update an existing curation */
export async function putCuration (this: That, opts: PutCurationOptions, transportOptions?: TransportRequestOptionsWithOutMeta): Promise<PutCurationResponse>
export async function putCuration (this: That, opts: PutCurationOptions, transportOptions?: TransportRequestOptionsWithMeta): Promise<TransportResult<PutCurationResponse, unknown>>
export async function putCuration (this: That, opts: PutCurationOptions, transportOptions?: TransportRequestOptions): Promise<PutCurationResponse>
export async function putCuration (this: That, opts: PutCurationOptions, transportOptions?: TransportRequestOptions): Promise<any> {
  const params: TransportRequestParams = {
    method: 'PUT',
    path: `/api/as/v1/engines/${encodeURIComponent(opts.engine_name)}/curations/${encodeURIComponent(opts.curation_id)}`,
    querystring: {},
    body: {}
  }

  if (opts.queries !== undefined) (params.querystring as Record<string, any>).queries = opts.queries
  if (opts.promotedDocIds !== undefined) (params.querystring as Record<string, any>).promotedDocIds = opts.promotedDocIds
  if (opts.hiddenDocIds !== undefined) (params.querystring as Record<string, any>).hiddenDocIds = opts.hiddenDocIds

  return await this.transport.request<PutCurationResponse>(params, transportOptions)
}

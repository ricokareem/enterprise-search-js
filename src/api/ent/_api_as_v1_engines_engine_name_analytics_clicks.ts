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

export interface GetTopClicksAnalyticsOptions {
  /**
   * Name of the engine
   */
  engine_name: string
  /**
   * Filter clicks over a search query
   */
  query?: string
  /**
   * The page to fetch. Defaults to 1
   */
  currentPage?: number
  /**
   * The number of results per page
   */
  pageSize?: number
  /**
   * Analytics filters
   */
  filters?: Array<{}>
}

export interface GetTopClicksAnalyticsResponse {}

/** Returns the number of clicks received by a document in descending order */
export async function getTopClicksAnalytics (this: That, opts: GetTopClicksAnalyticsOptions, transportOptions?: TransportRequestOptionsWithOutMeta): Promise<GetTopClicksAnalyticsResponse>
export async function getTopClicksAnalytics (this: That, opts: GetTopClicksAnalyticsOptions, transportOptions?: TransportRequestOptionsWithMeta): Promise<TransportResult<GetTopClicksAnalyticsResponse, unknown>>
export async function getTopClicksAnalytics (this: That, opts: GetTopClicksAnalyticsOptions, transportOptions?: TransportRequestOptions): Promise<GetTopClicksAnalyticsResponse>
export async function getTopClicksAnalytics (this: That, opts: GetTopClicksAnalyticsOptions, transportOptions?: TransportRequestOptions): Promise<any> {
  const params: TransportRequestParams = {
    method: 'GET',
    path: `/api/as/v1/engines/${encodeURIComponent(opts.engine_name)}/analytics/clicks`,
    querystring: {}
  }

  if (opts.query !== undefined) (params.querystring as Record<string, any>).query = opts.query
  if (opts.currentPage !== undefined) (params.querystring as Record<string, any>).currentPage = opts.currentPage
  if (opts.pageSize !== undefined) (params.querystring as Record<string, any>).pageSize = opts.pageSize
  if (opts.filters !== undefined) (params.querystring as Record<string, any>).filters = opts.filters

  return await this.transport.request<GetTopClicksAnalyticsResponse>(params, transportOptions)
}

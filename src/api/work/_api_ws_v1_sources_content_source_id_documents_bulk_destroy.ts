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

export interface DeleteDocumentsOptions {
  /**
   * Unique ID for a Custom API source, provided upon creation of a Custom API Source
   */
  content_source_id: string
  document_ids: string[]
  [k: string]: unknown
}

export interface DeleteDocumentsResponse {
  results: Array<{
    id: string
    success: boolean
    [k: string]: unknown
  }>
  [k: string]: unknown
}

/** Deletes a list of documents from a custom content source */
export async function deleteDocuments (this: That, opts: DeleteDocumentsOptions, transportOptions?: TransportRequestOptionsWithOutMeta): Promise<DeleteDocumentsResponse>
export async function deleteDocuments (this: That, opts: DeleteDocumentsOptions, transportOptions?: TransportRequestOptionsWithMeta): Promise<TransportResult<DeleteDocumentsResponse, unknown>>
export async function deleteDocuments (this: That, opts: DeleteDocumentsOptions, transportOptions?: TransportRequestOptions): Promise<DeleteDocumentsResponse>
export async function deleteDocuments (this: That, opts: DeleteDocumentsOptions, transportOptions?: TransportRequestOptions): Promise<any> {
  const params: TransportRequestParams = {
    method: 'POST',
    path: `/api/ws/v1/sources/${encodeURIComponent(opts.content_source_id)}/documents/bulk_destroy`,
    querystring: {},
    body: {}
  }

  params.body = opts?.document_ids
  return await this.transport.request<DeleteDocumentsResponse>(params, transportOptions)
}

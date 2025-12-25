import * as v from "@valibot/valibot";

// ============================================================
// API Schemas
// ============================================================

import { MetaResponse } from "./meta.ts";

/**
 * Request trading metadata for all DEXes.
 */
export const AllPerpMetasRequest = /* @__PURE__ */ (() => {
  return v.pipe(
    v.object({
      /** Type of request. */
      type: v.pipe(
        v.literal("allPerpMetas"),
        v.description("Type of request."),
      ),
    }),
    v.description("Request trading metadata for all DEXes."),
  );
})();
export type AllPerpMetasRequest = v.InferOutput<typeof AllPerpMetasRequest>;

/** Parameters for `allPerpMetas` (none) */
export type AllPerpMetasParameters = Record<string, never>;

/**
 * Metadata for perpetual assets across all DEXes.
 */
export const AllPerpMetasResponse = /* @__PURE__ */ (() => {
  return v.pipe(
    v.array(MetaResponse),
    v.description("Metadata for perpetual assets across all DEXes."),
  );
})();
export type AllPerpMetasResponse = v.InferOutput<typeof AllPerpMetasResponse>;

// ============================================================
// Execution Logic
// ============================================================

import type { InfoConfig } from "./_base/types.ts";

/**
 * Request trading metadata for all DEXes.
 *
 * @param config - General configuration for Info API requests.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Metadata for perpetual assets across all DEXes.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { allPerpMetas } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await allPerpMetas({ transport });
 * ```
 */
export function allPerpMetas(
  config: InfoConfig,
  paramsOrSignal?: AllPerpMetasParameters | AbortSignal,
  maybeSignal?: AbortSignal,
): Promise<AllPerpMetasResponse> {
  const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
  const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
  const request = v.parse(AllPerpMetasRequest, {
    type: "allPerpMetas",
    ...params,
  });
  return config.transport.request("info", request, signal);
}

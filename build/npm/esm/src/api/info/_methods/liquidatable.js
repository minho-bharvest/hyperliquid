import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
/**
 * Request liquidatable.
 */
export const LiquidatableRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("liquidatable"), v.description("Type of request.")),
    }), v.description("Request liquidatable."));
})();
/**
 * Response for liquidatable request.
 */
export const LiquidatableResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.array(v.unknown()), v.description("Response for liquidatable request."));
})();
/**
 * Request liquidatable.
 *
 * @param config - General configuration for Info API requests.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns unknown
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { liquidatable } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await liquidatable({ transport });
 * ```
 */
export function liquidatable(config, paramsOrSignal, maybeSignal) {
    const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
    const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
    const request = v.parse(LiquidatableRequest, {
        type: "liquidatable",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=liquidatable.js.map
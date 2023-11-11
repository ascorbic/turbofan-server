import type { Config } from "@netlify/edge-functions";

export { handleRequest as default } from "https://deno.land/x/turbofan/mod.ts";

export const config: Config = {
	method: ["GET", "PUT"],
	path: "/v8/artifacts/:hash",
	cache: "manual",
};

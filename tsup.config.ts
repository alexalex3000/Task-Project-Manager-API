import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/server.ts"],
    format: ["esm"],
    target: "node20",
    clean: true,
    bundle: true,
    skipNodeModulesBundle: true,
    shims: true,
});
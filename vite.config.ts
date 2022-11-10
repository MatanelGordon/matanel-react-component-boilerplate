import {defineConfig} from "vitest/config";

export default defineConfig({
	test: {
		include: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
		exclude: ["node_modules/", "dist/"]
	}
});
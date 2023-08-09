import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "fs";
import replace from "@rollup/plugin-replace";
const env = readFileSync(".env", "utf-8")
  .split("\n")
  .reduce((acc, line) => {
    const [key, value] = line.split("=");
    acc[key] = value;
    return acc;
  }, {});
export default defineConfig({
  plugins: [
    react(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV),
    }),
  ],
});

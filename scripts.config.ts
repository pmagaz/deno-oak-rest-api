import type { DenonConfig } from "https://deno.land/x/denon@2.4.4/mod.ts";

const config: DenonConfig = {
  watch: true,
  scripts: {
    start: {
      cmd: "deno run --allow-net --allow-read --allow-env src/server.ts",
      desc: "Run dev server",
      watch: true,
    },
  },
};

export default config;

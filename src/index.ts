import { ExtensionWebpackModule } from "@moonlight-mod/types";

export const webpackModules: Record<string, ExtensionWebpackModule> = {
  index: {
    entrypoint: true,
    run: async function () {
      const code = await fetch(
        "https://raw.githubusercontent.com/Cumcord/builds/main/build.js",
        { cache: "no-store" }
      ).then((res) => res.text());

      eval(code);
    }
  }
};

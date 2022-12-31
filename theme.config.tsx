import { DocsThemeConfig } from "nextra-theme-docs";

import Logo from "./components/built-in/Logo";
const config: DocsThemeConfig = {
  logo: Logo,

  project: {
    link: "https://github.com/SYNRGY-FP-C/docs",
  },
  chat: {
    link: "https://discord.gg/9xrNTJKQ",
  },
  docsRepositoryBase: "https://github.com/SYNRGY-FP-C/docs",
  footer: {
    text: <> {new Date().getFullYear()} © Synrgy FP Team C Dev Docs.</>,
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s – Synrgy FP Team C",
    };
  },
};

export default config;

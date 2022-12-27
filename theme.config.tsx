import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span className="font-bold">Bapakos</span>,

  project: {
    link: "https://github.com/SYNRGY-FP-C/docs",
  },
  chat: {
    link: "https://discord.gg/9xrNTJKQ",
  },
  docsRepositoryBase: "https://github.com/SYNRGY-FP-C/docs",
  footer: {
    text: <>{new Date().getFullYear()} © Synrgy FP-C API Docs.</>,
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s – Synrgy C",
    };
  },
};

export default config;

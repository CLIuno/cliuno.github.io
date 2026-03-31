import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "CLIuno",
    description: "CLIuno here for making your journey in web development less painful",
    srcDir: "src",
    appearance: "dark",
    head: [["link", { rel: "icon", type: "image/x-icon", href: "/logo.png" }]],
    srcExclude: ["**/mnt/**", "**/node_modules/**"],
    ignoreDeadLinks: [/localhost/, /\/path\/to\//],
    vite: {
      envDir: resolve(__dirname, ".."),
      optimizeDeps: {
        include: ["mermaid"],
      },
      ssr: {
        noExternal: ["vitepress-plugin-mermaid", "mermaid"],
      },
    },
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      search: {
        provider: "local",
      },
      footer: {
        message: "Released under the AGPL 3.0.1 License.",
        copyright: "Copyright © 2019-present RuM",
      },
      nav: [
        { text: "Home", link: "/" },
        { text: "Guide", link: "/guide/getting-started" },
        { text: "Frameworks", link: "/frameworks/framework" },
        { text: "API", link: "/api/" },
      ],

      sidebar: [
        { text: "What is CLIuno?", link: "/guide/what-is-cliuno" },
        { text: "Guide", link: "/guide/getting-started" },
        { text: "Frameworks", link: "/frameworks/framework" },
        {
          text: "API Reference",
          items: [
            { text: "Auth", link: "/api/#auth" },
            { text: "Users", link: "/api/#users" },
            { text: "Roles", link: "/api/#roles" },
            { text: "Posts", link: "/api/#posts" },
            { text: "Follows", link: "/api/#follows" },
          ],
        },
      ],

      socialLinks: [
        { icon: "github", link: "https://github.com/Cliuno" },
        { icon: "twitter", link: "https://twitter.com/cliuno" },
        {
          icon: {
            svg: '<svg fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.7s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"></path></g></svg>',
          },
          link: "https://ko-fi.com/ru44y",
        },
      ],
    },
  }),
);

module.exports = {
  title: "React-Toastify",
  tagline: "React notification made easy !",
  url: "https://fkhadra.github.io/",
  baseUrl: "/react-toastify/",
  favicon: "img/favicon.ico",
  organizationName: "fkhadra",
  projectName: "react-toastify",
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: "React-Toastify",
      links: [
        {
          to: "https://github.com/fkhadra/react-toastify",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Fadi Khadra`,
    },
    announcementBar: {
      id: "sponsor", // Any value that will identify this message
      content: 'Black lives matter.<a href="https://support.eji.org/give/153413/#!/donation/checkout" target="_blank">Support the Equal Justice Initiative.</a>'
        // 'Hey you like my work? Consider <a target="_blank" rel="noopener noreferrer" href="https://github.com/sponsors/fkhadra">sponsoring</a> me',
    },
    algolia: {
      apiKey: "f54fc6c27b73c67cf37ad6f02753423b",
      indexName: "react-toastify",
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  stylesheets: ["/ReactToastify.min.css"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/fkhadra/react-toastify-doc/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

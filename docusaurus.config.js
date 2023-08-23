// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FoundriesFactory',
  tagline: 'The Universal Platform',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://foundriesio.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ff-docs/',
  // GitHub pages deployment config.
  organizationName: 'foundriesio', // Usually your GitHub org/user name.
  projectName: 'ff-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // This applies when building the site for deployment.
  // The converted pages link/reference pages not yet added.
  // Normally we will want broken links to return an error.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  staticDirectories: ['static',],
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
      },
    ],
    //[
    //  '@docusaurus/plugin-ideal-image',
    //  {
    //    quality: 70,
    //    max: 300, // max resized image's size.
    //    min: 100, // min resized image's size. if original is lower, use that size.
    //    steps: 4, // the max number of images generated between min and max (inclusive)
    //    disableInDev: false,
    //  },
    //],
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/foundriesio/ff-docs',
          includeCurrentVersion: true,
          lastVersion: 'current',
        },
        //  Docs focused site. we can still have a blog here, it just won't be the focus.
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories:true,
        },
      },
      image: 'img/foundries-social-card.jpg',
      navbar: {
        style: 'primary',
        title: 'FoundriesFactory',
        logo: {
          alt: 'Foundries.io Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',

          },
          {
           type: 'dropdown',
           label: 'Trainings',
           position: 'left',
           items: [
             {
               to: '/training/tutorial-a',
               label: 'Tutorial A',
             },
             {
               to: 'training/tutorial-c',
               label: 'Tutorial C',
             },
             {
               to: 'training/tutorial-d',
               label: 'Tutorial Downloads',
             },
           ],
          },
          {
           type: 'docsVersionDropdown',
           position: 'left',
           dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
           dropdownActiveClassDisabled: true,
          },
          {
            href: 'foundries.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Docs',
                to: '/',
              },
              {
                label: 'Tutorials',
                to: '/tutorials',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/FoundriesIO',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/foundriesio/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Foundries.io, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash','git','json'],
      },
     announcementBar: {
     id: 'cowBoy',
     content:
       ' Yee-haw! 🤠 🐮',
     backgroundColor: '#f7f2cd',
     },
 
    }),
};

module.exports = config;

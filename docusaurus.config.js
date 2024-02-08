// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';
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
          sidebarPath: './sidebars.js',
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/foundriesio/ff-docs',
          includeCurrentVersion: true,
          lastVersion: 'current',
        },
        blog: {
          blogTitle: 'Foundries.io Blog',
          blogDescription: 'Foundries.io Blog on all things FoundriesFactory, embedded development, OTA Updates, and IoT Security',
        },
        theme: {
          customCss: './src/css/custom.css',
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
            to: 'blog',
            label: 'Blog',
            position: 'left',
          },
          {
           label: 'Offline Documentation',
           position: 'right',
           to: '/offline-documentation/offline-documentation',
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
           position: 'right',
            dropdownItemsAfter: [{href: 'https://docs.foundries.io', label: 'All versions'}],
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash','git','json','diff'],
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

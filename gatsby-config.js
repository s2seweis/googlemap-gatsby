// require ('dotenv').config ({
//   path: `.env.${process.env.NODE_ENV}`,
// });

// module.exports = {
//   plugins: [
//     'gatsby-plugin-gatsby-cloud',

//     {
//       resolve: `gatsby-plugin-google-gtag`,
//       options: {
//         // You can add multiple tracking ids and a pageview event will be fired for all of them.
//         trackingIds: [
//           'G-1K55PTZR34', // Google Analytics / GA
//           // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
//           // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
//         ],

//         // This object is used for configuration specific to this plugin
//         pluginConfig: {
//           // Puts tracking script in the head instead of the body
//           // head: false,
//           head: true,
//           // Setting this parameter is also optional

//           origin: 'YOUR_SELF_HOSTED_ORIGIN',
//           // Delays processing pageview events on route update (in milliseconds)
//           delayOnRouteUpdate: 0,
//         },
//       },
//     },

//     'gatsby-plugin-postcss',
//     {
//       resolve: 'gatsby-source-strapi',
//       options: {
//         // local
//         // apiURL: 'http://127.0.0.1:1337',

//         // deployed:1
//         // apiURL: 'https://strapi4-8-2.herokuapp.com',
//         // deployed:2
//         apiURL: 'https://googlemap-strapi.herokuapp.com/',

//         //delpoyed:1
//         accessToken: 'f1d548903705da18a28f37ada9fa587c96cfa3bd1916dfdaa102f8340ec187182cdd25656d6f8b5f1451c38e3db2803c1c3a4b56a1c805be0e0ebcb3e8caee3d7ec035547d1048b7a99abcc401180571ca74dac1fa8c8ef3ea4a7346b87d85d66ff393be72d237be47113084779d1b41bb1fa56e85c08a32913c4a2bf0205b75',

//         //local:1
//         // accessToken: '4ad18d9ec2b2c9fcb2d26c3c4031e8c938b6c79d14b46a457eee54c17b808baaa759e1e0f9c54dcd524ce373550f0424b2d5ee8541be3a9fcbe357754d151504db4a8fe1fd934658cb47b9e47218198e3a956082e461d39c7c203fca2cd8d6049a31abee946f9ee9e2c2f7a00c4aab6b23276af12556cc311fbfce4f5c558b79',

//         collectionTypes: [
//           {
//             singularName: 'article',
//             queryParams: {
//               publicationState: process.env.GATSBY_IS_PREVIEW === 'true'
//                 ? 'preview'
//                 : 'live',
//               populate: {
//                 cover: '*',
//                 blocks: {
//                   populate: '*',
//                 },
//               },
//             },
//           },
//           // {
//           //   singularName: 'breakfast',
//           //   queryParams: {
//           //     publicationState: process.env.GATSBY_IS_PREVIEW === 'true'
//           //       ? 'preview'
//           //       : 'live',
//           //     populate: {
//           //       cover: '*',
//           //       blocks: {
//           //         populate: '*',
//           //       },
//           //     },
//           //   },
//           // },
//           {
//             singularName: 'author',
//           },
//           {
//             singularName: 'category',
//           },
//         ],
//         singleTypes: [
//           // {
//           //   singularName: 'about',
//           //   queryParams: {
//           //     populate: {
//           //       cover: '*',
//           //       blocks: {
//           //         populate: '*',
//           //       },
//           //     },
//           //   },
//           // },

//           {
//             singularName: 'global',
//             queryParams: {
//               populate: {
//                 favicon: '*',
//                 defaultSeo: {
//                   populate: '*',
//                 },
//               },
//             },
//           },

//           // 'info',
//           // 'overview',
//           // 'content3',
//           // 'hero1',

//           // 'me'
//         ],
//       },
//     },
//     // ###
//     {
//       resolve: `gatsby-omni-font-loader`,
//       options: {
//         enableListener: true,
//         preconnect: [
//           `https://fonts.googleapis.com`,
//           `https://fonts.gstatic.com`,
//         ],
//         web: [
//           // {
//           //   name: `Open Sans`,
//           //   file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
//           // },
//           {
//             name: `Lobster`,
//             file: `https://fonts.googleapis.com/css2?family=Lobster&display=swap`,
//           },
//           {
//             name: `Lobster+Two`,
//             file: `https://fonts.googleapis.com/css2?family=Lobster+Two&family=Roboto:wght@300&display=swap`,
//           },
//           {
//             name: `Sora`,
//             file: `https://fonts.googleapis.com/css2?family=Sora:wght@200&display=swap`,
//           },
//           {
//             name: `Roboto`,
//             file: `https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Sora:wght@200&display=swap`,
//           },
//         ],
//       },
//     },
//     // ###
//     'gatsby-plugin-image',
//     'gatsby-plugin-sharp',
//     'gatsby-transformer-sharp',
//     'gatsby-transformer-remark',
//   ],
// };

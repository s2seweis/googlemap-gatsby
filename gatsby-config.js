require ('dotenv').config ({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    'gatsby-plugin-gatsby-cloud',

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-1K55PTZR34", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
     
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          // head: false,
          head: true,
          // Setting this parameter is also optional

        

          origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },



  



    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-strapi',
      options: {

        // local
          // apiURL: "http://127.0.0.1:1337",



        // deployed
        apiURL: 'https://strapi4-8-2.herokuapp.com',

        //delpoyed
        accessToken: '9a09cc791f40d7aaed5a6e4536b2c7fac9dc6b04521a59fb34b342ef7c1bc8d38664d64b888e78db09fea3ccd46c1eebd984d27929a7ef1ae1f3de03b83789c64e4cfd26bcff79375e6c32a4445ce0ae1f024b5c03f0c1826111c888b7fd734405f6c46a2a617fd522e44583b744f8b7bc9bdd4aa3dfd7a969144c23023d1ddb',

        //local
        // accessToken: "17b048a03fd80741931d6a4ef6f6877b808d90b5fe095303a96338ca429bcbe3e0ac5fc1a19700420e2b3c38fdccd3e4b03f54f3df305eecade9b8cac13434e0c9314040f0ad83c0e180bb3fe2ea984351f409d85e4e8ee58ee2d28232b15015a390bc8a54e18824506e17c3a1c6cac4320b39895aa808a3012252ae2da06929",
        
        
        collectionTypes: [
          {
            singularName: 'article',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true'
                ? 'preview'
                : 'live',
              populate: {
                cover: '*',
                blocks: {
                  populate: '*',
                },
              },
            },
          },
          // {
          //   singularName: 'breakfast',
          //   queryParams: {
          //     publicationState: process.env.GATSBY_IS_PREVIEW === 'true'
          //       ? 'preview'
          //       : 'live',
          //     populate: {
          //       cover: '*',
          //       blocks: {
          //         populate: '*',
          //       },
          //     },
          //   },
          // },
          {
            singularName: 'author',
          },
          {
            singularName: 'category',
          },
        ],
        singleTypes: [

          {
            singularName: 'about',
            queryParams: {
              populate: {
                cover: '*',
                blocks: {
                  populate: '*',
                },
              },
            },
          },


          {
            singularName: 'global',
            queryParams: {
              populate: {
                favicon: '*',
                defaultSeo: {
                  populate: '*',
                },
              },
            },
          },


          'info',
          'overview',
          'content3',
          'hero1',

          // 'me'

          
        ],
      },
    },
    // ###
    {


      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          // {
          //   name: `Open Sans`, 
          //   file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          // },
          {
            name: `Lobster`, 
            file: `https://fonts.googleapis.com/css2?family=Lobster&display=swap`,
          },
          {
            name: `Lobster+Two`, 
            file: `https://fonts.googleapis.com/css2?family=Lobster+Two&family=Roboto:wght@300&display=swap`,
          },
        ],
      },


      
    },
    // ###
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',




    
  ],
};

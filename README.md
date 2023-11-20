# React Gatsby Google Maps App with Strapi CMS

This is a React Gatsby app that integrates the Google Maps API and uses Strapi as a CMS (Content Management System). The application utilizes various features, including displaying markers as Boxes and Buttons on the map, implementing clustering for a better visual representation of markers, allowing users to pan to their current location, incorporating auto-complete functionality using Google Maps, and supporting KML data through Strapi.

<div align="center">
<img src="assets/gmap-1" alt="Example Image">
<img src="assets/gmap-2" alt="Example Image">
</div>

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/s2seweis/googlemap-gatsby.git
   ```

2. **Install Dependencies:**
   ```bash
   cd react-gatsby-google-maps-app
   npm install
   ```

3. **Set up Google Maps API Key:**
   Obtain a Google Maps API key by following the [Google Maps API documentation](https://developers.google.com/maps/documentation/javascript/get-api-key).

   Once you have the API key, replace the placeholder in the `gatsby-config.js` file:
   ```javascript
   // gatsby-config.js
   {
     resolve: 'gatsby-source-googlemaps',
     options: {
       key: 'YOUR_GOOGLE_MAPS_API_KEY',
       // Other configuration options...
     },
   },
   ```

4. **Set up Strapi CMS:**
   - Follow the [Strapi installation guide](https://strapi.io/documentation/v3.x/getting-started/introduction.html) to set up and start your Strapi CMS server.

5. **Create Content in Strapi:**
   - Use the Strapi admin panel to create content for your markers, buttons, or any other data you want to display on the map.

6. **Add KML Data:**
   If you have KML data to display on the map, you can add it to the Strapi CMS. Create a new content type for KML data and add records with links to your KML files.

7. **Run the Application:**
   ```bash
   gatsby develop
   ```

   The application should be accessible at `http://localhost:8000`.

## Features

### Markers as Boxes and Buttons
- Markers on the map are represented as Boxes and Buttons, providing a visually appealing and interactive experience.

### Clustering
- Clustering is implemented to group nearby markers for improved map readability.

### Pan to Current Location
- Users can easily pan to their current location with a dedicated button for enhanced user experience.

### Auto-Complete from Google Maps
- The application utilizes Google Maps' auto-complete functionality for location search, making it easier for users to find and select locations.

### KML Data Support through Strapi
- The app supports the display of KML data on the map, with the KML data managed through Strapi CMS.

## Dependencies

- [React](https://reactjs.org/)
- [Gatsby](https://www.gatsbyjs.com/)
- [react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)
- [gatsby-source-googlemaps](https://www.npmjs.com/package/gatsby-source-googlemaps)
- [Strapi CMS](https://strapi.io/)

## Configuration

- Modify the `gatsby-config.js` file to customize the Google Maps API key and other configuration options.
- Configure Strapi CMS according to your content model and requirements.

## Contributing

If you'd like to contribute to the project, please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE.md).
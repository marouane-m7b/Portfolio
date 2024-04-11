import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production', // Or your desired dataset name
  apiVersion: '2023-05-03', // Use the latest stable API version
  useCdn: true, // Enable CDN for faster performance
  token: process.env.REACT_APP_SANITY_API_TOKEN2, // Your Sanity project's token
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source).url();

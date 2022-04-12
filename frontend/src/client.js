import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'kav2wdae',
  dataset: 'production',
  apiVersion: 'v1',
  useCdn: true,
  token: 'skvhFI7Nkn28O7XHvErs1ni7qppqjGTfhtjU72O3ZkoNaCPsoAocSnZgwDNU5xL38SDEP7xKcSPlsYESOlhknMVZdPLEPko5lvcf3Az5mnZUImYHr43DMLRh2i8YoTijU8enJfFMC5rdklDedHEqGIU8IJJzfvx8mOVPEEKXi4HUwTa3qd1u',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
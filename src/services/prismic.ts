import * as prismic from '@prismicio/client'

export function getPrismicClient() {
  const repoName = process.env.PRISMIC_REPO_NAME;

  const endpoint = prismic.getEndpoint(repoName);

  console.log('endpoint', endpoint);

  const client = prismic.createClient(
    endpoint,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  );

  return client;
};
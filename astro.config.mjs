import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from '@astrojs/tailwind';
import basicSsl from '@vitejs/plugin-basic-ssl';
import vercel from "@astrojs/vercel/serverless";
const env = loadEnv('', process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    bridge: env.STORYBLOK_IS_PREVIEW === 'yes',
    apiOptions: {
      region: ''
    },
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
      config: 'storyblok/Config',
      hero: 'storyblok/Hero',
      'popular-articles': 'storyblok/PopularArticles',
      'all-articles': 'storyblok/AllArticles',
      article: 'storyblok/Article'
    },
    output: env.STORYBLOK_IS_PREVIEW === 'yes' ? 'server' : 'static'
  }), tailwind()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  output: "server",
  adapter: vercel()
});
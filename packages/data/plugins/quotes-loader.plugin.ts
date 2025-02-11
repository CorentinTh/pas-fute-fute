import type { Plugin } from 'vite';
import slugify from 'slugify';
import yaml from 'yaml';

export function quotesLoaderPlugin(): Plugin {
  return {
    name: 'vite-plugin-quotes-loader',
    enforce: 'pre',

    async transform(code, id) {
      if (id.endsWith('/quotes.yaml')) {
        const rawQuotes = yaml.parse(code);

        const quotes = rawQuotes.map(({ quote }) => ({
          quote,
          slug: slugify(quote, {
            lower: true,
            strict: true,
            trim: true,
          }),
        }));

        return {
          code: `export default ${JSON.stringify(quotes)};`,
          map: null,
        };
      }
      return null;
    },
  };
}

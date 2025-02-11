import { shuffle } from 'lodash-es';
import quotes from './quotes.yaml';

export { createUniqueRandomQuoteGenerator, findQuoteBySlug, getRandomQuote, getUniqueRandomQuote, quotes };

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function createUniqueRandomQuoteGenerator() {
  let shuffledQuotes = shuffle(quotes);

  return function getUniqueRandomQuote() {
    if (shuffledQuotes.length === 0) {
      shuffledQuotes = shuffle(quotes);
    }

    return shuffledQuotes.pop();
  };
}

function findQuoteBySlug({ slug }: { slug: string }) {
  return quotes.find(quote => quote.slug === slug);
}

const getUniqueRandomQuote = createUniqueRandomQuoteGenerator();

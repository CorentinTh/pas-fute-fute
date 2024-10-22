import { deburr } from 'lodash-es';
import { describe, expect, test } from 'vitest';
import quotes from './quotes.yaml';

describe('quotes', () => {
  test('a quote is a non-empty string', () => {
    quotes.forEach(({ quote }) => {
      expect(quote).to.be.a('string');
      expect(quote.length).to.be.greaterThan(1);
    });
  });

  test('each quote starts with a capital letter', () => {
    quotes.forEach(({ quote }) => {
      expect(quote[0]).to.match(/[A-Z]/, `Quote "${quote}" does not start with a capital letter`);
    });
  });

  test('each quote ends with a period', () => {
    quotes.forEach(({ quote }) => {
      expect(quote.at(-1)).to.eql('.', `Quote "${quote}" does not end with a period`);
    });
  });

  test('quotes must be unique', () => {
    const quotesWithDeburredText = quotes.map(({ quote }) => ({ quote, deburredQuote: deburr(quote).toLowerCase().replace(/[^a-z]/g, '') }));

    quotesWithDeburredText.forEach(({ deburredQuote, quote }, index) => {
      const hasDuplicate = quotesWithDeburredText.some((quoteWithDeburredText, otherIndex) => index !== otherIndex && quoteWithDeburredText.deburredQuote === deburredQuote);

      expect(hasDuplicate).to.eql(false, `Quote "${quote}" is duplicated`);
    });
  });

  test('quotes must be sorted alphabetically', () => {
    const sortedQuotes = [...quotes].sort((a, b) => a.quote.localeCompare(b.quote));

    expect(quotes).to.eql(sortedQuotes, 'Quotes are not sorted alphabetically');
  });

  test('quotes must not contain unusual characters', () => {
    quotes.forEach(({ quote }) => {
      expect(quote).to.match(/^[a-zàâçéèêëîïôûùüÿñæœ0-9.,:'"\-() /·]*$/i, `Quote "${quote}" contains unusual characters`);
    });
  });
});

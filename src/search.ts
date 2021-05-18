import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import {
  brands,
  categories,
  clearFilters,
  clearFiltersEmptyResults,
  clearFiltersMobile,
  configuration,
  freeShipping,
  hitsPerPage,
  pagination,
  priceSlider,
  products,
  ratings,
  resultsNumberMobile,
  saveFiltersMobile,
  searchBox,
  sortBy,
} from './widgets';
import getRouting from './routing';

const searchClient = algoliasearch('ZZG80VNNLY', '9852ad753415c03bd78794fa27db0818');

const search = instantsearch({
  searchClient,
  indexName: 'dev_ecommerce_demo',
  routing: getRouting({ indexName: 'dev_ecommerce_demo' }),
});

search.addWidgets([
  brands,
  categories,
  clearFilters,
  clearFiltersEmptyResults,
  clearFiltersMobile,
  configuration,
  freeShipping,
  hitsPerPage,
  pagination,
  priceSlider,
  products,
  ratings,
  resultsNumberMobile,
  saveFiltersMobile,
  searchBox,
  sortBy,
]);

export default search;

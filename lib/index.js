'use strict';

const rules = {
  'await-async-query': require('./rules/await-async-query'),
  'no-await-sync-query': require('./rules/no-await-sync-query'),
};

module.exports = {
  rules,
  configs: {
    all: {
      plugins: ['testing-library'],
      rules,
    },
    recommended: {
      plugins: ['testing-library'],
      rules: {
        'testing-library/await-async-query': 'error',
        'testing-library/no-await-sync-query': 'error',
      },
    },
  },
};
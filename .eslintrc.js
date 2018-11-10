module.exports = {
  'extends': 'airbnb',
  'rules': {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'no-param-reassign': [0],
    'import/prefer-default-export': [0],
    'react/prop-types': [1, { ignore: 'match' }],
    'import/named': [0]
  },
  'env': {
    'browser': true,
    'node': true,
  },
};

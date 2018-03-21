module.exports = {
  extends: ['react-tools', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false
      }
    ]
  }
}

module.exports = {
    env: {
        'cypress/globals': true,
        browser: true,
        es2021: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'cypress',
    ],
    rules: {
        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': true
            }
        ],
        '@typescript-eslint/semi': [
            'error'
        ],
    },
    extends: [
        'plugin:cypress/recommended'
    ],
};
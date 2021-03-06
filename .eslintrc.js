const _ = require('lodash');

const naming_convention_exceptions = {
    regex: '^(marginBottom|minWidth|maxWidth|marginLeft|marginRight|scrollTop|backgroundColor|marginInlineStart|componentDidMount|componentWillUnmount|componentDidUpdate|componentDidCatch|getDerivedStateFromError|enforceActions|recurseEverything|currentWindow|windowTypes|defaultProps|windowId|useAsButton|autoReposition|lockOpacity|showAlways|childList|backgroundImage|attributeFilter|saveAs|tabId)$',
    match: false,
};

const rules = {
    js: {
        //> javascript
        'import/no-cycle': 'off',
        'import/named': 'off',
        'import/prefer-default-export': 'off',
        'prefer-arrow-callback': 'off',
        'func-names': 'off',
        'no-param-reassign': 'off',
        'class-methods-use-this': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        camelcase: 'off',
        quotes: [2, 'single', { avoidEscape: true }],
        'max-len': [
            'error',
            100,
            2,
            {
                ignoreUrls: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'max-depth': ['error', 4],
        'max-nested-callbacks': ['error', 8],
        'no-negated-condition': 'error',
        'linebreak-style': ['error', 'windows'],
        'object-curly-newline': ['error', { consistent: true }],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],
        curly: ['error', 'all'],
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    markers: ['>', '<'],
                },
                block: {
                    markers: ['*'],
                    balanced: true,
                },
            },
        ],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['js/*', 'js/*/**', 'rollup.config.js', 'webpack.config.js'],
            },
        ],
        //< javascript
        //> react
        'react/no-array-index-key': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        //< react
    },
    ts: {
        //> typescript
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'brace-style': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['snake_case'],
                filter: naming_convention_exceptions,
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
            {
                selector: ['variable', 'property'],
                format: ['snake_case', 'PascalCase'],
                filter: naming_convention_exceptions,
            },
        ],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        //< typescript

        //> react
        'react/prefer-stateless-function': 'off',
        'react/jsx-filename-extension': 'off',
        'react/static-property-placement': 'off',
        'react/jsx-indent-props': ['error', 4],
        //< react
    },
};

module.exports = {
    extends: ['airbnb', 'airbnb/hooks', 'prettier'],
    plugins: ['react', 'prettier'],
    parser: 'babel-eslint',
    rules: { ...rules.js, 'prettier/prettier': 'error' },
    overrides: [
        {
            extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier'],
            parser: '@typescript-eslint/parser',
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                // requered for some rules to work, like for example: '@typescript-eslint/prefer-includes': 'error'
                project: 'tsconfig.json',
                tsconfigRootDir: __dirname,
            },
            settings: {
                'import/resolver': {
                    typescript: {},
                },
            },
            rules: _.merge({ 'no-use-before-define': 'off' }, rules.js, rules.ts),
        },
    ],
    globals: {
        window: false,
        document: false,
        env: false,
        l: false,
        n: false,
        nn: false,
        s: false,
        sa: false,
        sb: false,
        sab: false,
        browser: false,
        page: false,
        show_dependencicies_from_other_page_loaded_into_this_page_alert: false,
        show_err_ribbon: false,
        err: false,
        err_async: false,
        throw_err: false,
        err_obj: false,
        doc: true,
        doc_state: false,
    },
};

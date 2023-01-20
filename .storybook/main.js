const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../**/*.story.ts', '../**/*.story.tsx', '../**/*.story.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-storysource'],
  webpackFinal: async (config, { configType }) => {
    config.resolve = {
      ...(config.resolve || {}),
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        src: path.resolve(__dirname, '../src'),
      },
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]-[hash:base64:5]',
            },
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../'),
    });

    if (process.env.NODE_ENV === 'Docker') {
      config.watchOptions = {
        aggregateTimeout: 500,
        poll: 1000,
      };
    }

    // Return the altered config
    return config;
  },
};

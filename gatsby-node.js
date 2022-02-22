const webpack = require('webpack');

exports.onCreateWebpackConfig = ({
  stage,
  loaders,
  actions,
}) => {
  // Fix `process` not defined issue created from IBM components 
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
  });

  // Bypass canvas build issue created from IBM components during tree shaking
  if ((stage === 'build-html') || (stage === 'develop-html')) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
        ],
      },
    });
  }


  // Disable Source Maps on production build
  if ((stage === 'build-javascript') && (process.env.NODE_ENV === 'production')) {
    // turn off source-maps
    actions.setWebpackConfig({
      devtool: false
    });
  }
};

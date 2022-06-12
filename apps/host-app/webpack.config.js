const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../../package.json').dependencies;

console.log(deps);

module.exports = (config, context) => {
  return {
    ...config,
    devServer: {
      ...config.devServer,
      proxy: {
        'http://localhost:3003': 'http://localhost:3003',
        'http://localhost:3002': 'http://localhost:3002',
      },
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'host',
        remotes: {
          cart: 'cart@http://localhost:3003/remoteEntry.js',
          productList: 'productList@http://localhost:3002/remoteEntry.js',
        },
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
    ],
  };
};

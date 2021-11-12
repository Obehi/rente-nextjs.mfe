//const { ModuleFederationPlugin } = require('module-federation-plugin')
const { ModuleFederationPlugin } = require("webpack").container;



module.exports = {
  reactStrictMode: true,

  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;

    config.plugins.push(
        new ModuleFederationPlugin({
            remotes: {
              renteFrontEnd: 'renteFrontEnd@https://rente-angular-mfe.herokuapp.com/remoteEntry.js'
            }
        })
    );
    
    return config
  },
}

const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "super",
          remotes: {
            opms: "opms@http://localhost:4000/remoteEntry.js",
            ui: "ui@http://localhost:4001/remoteEntry.js",
          },
          shared: {
            react: { singleton: true },
            "react-dom": { singleton: true },
          },
        }),
      ],
    },
  },
};

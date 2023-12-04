const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "super",
          remotes: {
            opms: "opms@https://yarn-monorepo-opms.vercel.app/remoteEntry.js",
            ui: "ui@https://yarn-monorepo-ui.vercel.app/remoteEntry.js",
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

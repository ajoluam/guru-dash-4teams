module.exports = ({ env }) => ({
    // ...
    'config-sync': {
      destination: "extensions/config-sync/files/",
      minify: false,
      importOnBootstrap: false,
      include: [
        "core-store",
        "role-permissions"
      ],
      exclude: [
        "core-store.plugin_users-permissions_grant"
      ]
    },
    // ...
  });
const { withKeystone } = require('@keystone-next/keystone/next');

module.exports = withKeystone({
  typescript: {
    ignoreBuildErrors: true,
  },
});

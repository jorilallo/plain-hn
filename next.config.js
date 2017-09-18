// Turned UglifyJS off as boundless-arrow-key-navigation is unable to compile
module.exports = {
  webpack(cfg) {
    cfg.plugins = cfg.plugins.filter(plugin => {
      if (plugin.constructor.name === 'UglifyJsPlugin') {
        return false;
      } else {
        return true;
      }
    });

    return cfg;
  },
};

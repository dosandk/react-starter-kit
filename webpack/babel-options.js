const fs = require('fs');
const babelrc = JSON.parse(fs.readFileSync('./.babelrc'));
const { plugins, presets } = babelrc;

const babelPlugins = plugins.map(item => require.resolve(`babel-plugin-${item}`));

const babelPreset = presets.map(item => {
  if (Array.isArray(item)) {
    const [pluginName] = item;

    return require.resolve(`babel-preset-${pluginName}`)
  }

  return require.resolve(`babel-preset-${item}`);
});

module.exports = {
  babelPlugins, babelPreset
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["-preset-expo"],
    plugins: ["nativewind/"],
  };
};

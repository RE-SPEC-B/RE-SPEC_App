module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
        alias: {
          "@components": "./src/components",
          "@hooks": "./src/hooks",
          "@assets": "./src/libs/assets",
          "@styles": "./src/libs/styles",
          "@navigations": "./src/navigations",
          "@screens": "./src/screens",
          "@services": "./src/services",
          "@states": "./src/states",
          "@defines": "./src/defines",
          "@utils": "./src/utils",
        },
      },
    ],
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ".",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@assets": "./src/assets",
          "@styles": "./src/styles",
        },
      },
    ],
  ],
};

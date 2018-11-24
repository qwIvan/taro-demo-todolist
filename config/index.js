module.exports = () => ({
  projectName: "scratch",
  outputRoot: "dist",
  env: {
    NODE_ENV: undefined
  },
  plugins: {
    babel: {
      plugins: ["transform-class-properties", "transform-decorators-legacy"]
    }
  }
});

module.exports = {
  // Specify the version of react-scripts
  reactScriptsVersion: "react-scripts",

  // Style configuration
  style: {
    css: {
      // Disable URL handling in the CSS loader
      loaderOptions: () => {
        return {
          url: false,
        };
      },
    },
  },
};

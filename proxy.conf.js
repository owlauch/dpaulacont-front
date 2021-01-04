const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "https://dpaulacont-back.herokuapp.com",
    // target: "http://localhost:3000",
    secure: true,
    changeOrigin: true,
    loglevel: "debug",
    pathRewrite: {
      "^/api": "",
    },
  },
];

module.exports = PROXY_CONFIG;

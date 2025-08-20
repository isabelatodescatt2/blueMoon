// craco.config.js
module.exports = {
  devServer: {
    allowedHosts: 'all',
    // Adicione estas linhas para remover os warnings:
    setupMiddlewares: (middlewares, devServer) => {
      return middlewares;
    }
  },
  webpack: {
    configure: {
      ignoreWarnings: [
        /DeprecationWarning/
      ]
    }
  }
};
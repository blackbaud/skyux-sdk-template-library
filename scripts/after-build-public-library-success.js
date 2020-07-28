module.exports = {
  runAsync: () => {
    console.log(`The 'after-build-public-library-success' script was successfully run. Current working directory: ${process.cwd()}`);
    return Promise.resolve();
  }
};
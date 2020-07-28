module.exports = {
  runAsync: () => {
    console.log(`The 'before-script' script was successfully run. Current working directory: ${process.cwd()}`);
    return Promise.resolve();
  }
};
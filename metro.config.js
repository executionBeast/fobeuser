const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const os = require('os');

// Patch os.availableParallelism() for older Node.js versions
if (typeof os.availableParallelism !== 'function') {
  os.availableParallelism = () => os.cpus().length;
}

// Get Metro default config
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.maxWorkers = os.availableParallelism();

// Merge additional configuration
const config = {};

module.exports = mergeConfig(defaultConfig, config);












// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// const os = require('os');

// // Metro configuration
// // https://reactnative.dev/docs/metro
// // @type {import('@react-native/metro-config').MetroConfig}

// const defaultConfig = getDefaultConfig(__dirname);

// // Fix os.availableParallelism() issue for older Node.js versions
// if (!os.availableParallelism) {
//   os.availableParallelism = () => os.cpus().length;
// }
// defaultConfig.maxWorkers = os.availableParallelism();

// // Merge with any additional configuration
// const config = {};

// module.exports = mergeConfig(defaultConfig, config);

// --------------------------------------------------------------------------


// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('@react-native/metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);


// --------------------------------------------------------------------------------------------

// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// const os = require('os');

// const defaultConfig = getDefaultConfig(__dirname);

// // Ensure compatibility if `os.availableParallelism` is undefined
// defaultConfig.maxWorkers = os.availableParallelism ? os.availableParallelism() : os.cpus().length;

// const customConfig = {
//   resolver: {
//     // Allow resolving extra file extensions if needed
//     sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'],
//   },
//   transformer: {
//     // Enable inline requires to optimize performance
//     inlineRequires: true,
//   },
// };

// // Merge default and custom configuration
// module.exports = mergeConfig(defaultConfig, customConfig);

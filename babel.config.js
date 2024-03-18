module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
          '.json',
        ],
        root: ['./src'],
        alias: {
          '@navigation': './src/navigation',
          '@common': './src/common',
          '@themes': './src/themes',
          '@assests': './src/assests',
          '@screens': './src/screens',
          '@components': './src/components',
          '@store': './src/store',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

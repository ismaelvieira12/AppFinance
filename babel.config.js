module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      'babel-preset-expo', // 👈 necessário para projetos Expo
    ],
    plugins: [
      // Permite usar importações automáticas e reexportações
       'react-native-worklets/plugin', // 👈 obrigatório se usar Reanimated
      [
        'module-resolver',
        {
          root: ['./src'], // 👈 permite usar imports absolutos, ex: import X from "components/X"
          alias: {
            '@components': './src/components',
            '@screens': './src/Screens',
            '@assets': './src/assets',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};

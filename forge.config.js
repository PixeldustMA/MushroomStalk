module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'PixeldustMA',
          name: 'MushroomStalk',
        },
        authToken: process.env.GITHUB_TOKEN
      },
    },
  ],
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    }
  ]
};

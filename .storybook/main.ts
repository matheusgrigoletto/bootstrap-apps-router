const config = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['../public'],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    config.resolve.alias['@'] = `${process.cwd()}/src`;
    return config;
  },
};

export default config;

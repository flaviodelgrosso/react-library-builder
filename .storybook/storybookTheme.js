import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  colorPrimary: '#004080',
  colorSecondary: '#eb641f',

  // UI
  appBg: '#f5f5f5',
  appContentBg: '#f5f5f5',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Roboto, sans-serif',

  // Text colors
  textColor: 'black',
  textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '#99d9ff',
  barBg: '#004080',

  brandTitle: 'React library starter kit',
  brandUrl: 'https://github.com/flaviodelgrosso/react-library-builder.git',
});

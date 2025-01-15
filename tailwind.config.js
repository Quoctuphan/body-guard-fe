
/** @type {import('tailwindcss').Config} */
export const content = [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx,css}',
];
export const theme = {
  extend: {
    colors:{
      mainBgColor:'#B41712',
      mainBgHoverColor:'#FF645F',
      primary: '#e1234e',
      secondary: '#ffac41' 
    }
  },
};
export const plugins = [
  require('tailwindcss-animated')
];

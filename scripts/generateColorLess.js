#!/usr/bin/env node
const path = require('path');
const { generateTheme } = require('antd-theme-generator');

const options = {
  antDir: path.join(__dirname, '../'),
  stylesDir: path.join(__dirname, '../site/theme/static'),
  antdStylesDir: path.join(__dirname, '../components'),
  varFile: path.join(__dirname, '../components/style/themes/default.less'),
  mainLessFile: path.join(__dirname, '../site/theme/static/index.less'),
  themeVariables: ['@primary-color'],
  outputFilePath: path.join(__dirname, '../_site/color.less'),
};

generateTheme(options);

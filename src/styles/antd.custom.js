/**
 * Ant Design custom theme
 * ref: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
 */
import base from './base';
import colors from './colors';
import fonts from './fonts';

/**
 * Custom Antd Theme
 */
export default {
  // -------- Colors -----------
  '@primary-color': colors.primary,
  '@success-color': colors.success,
  '@warning-color': colors.warning,
  '@error-color': colors.error,

  // -------- Base --------
  '@body-background': colors.bodyBackground,
  '@box-shadow-base': base.boxShadow,
  '@font-family': fonts.fontFamilyAntd,
  '@border-radius-base': base.borderRadius,

  // -------- Heading and Text --------
  '@heading-color': colors.text,
  '@text-color': colors.text,
  '@text-color-secondary': colors.textSecondary,

  // -------- Vertical paddings --------
  //'@padding-lg': '24px', // containers
  //'@padding-md': '16px', // small containers and buttons
  //'@padding-sm': '12px', // Form controls and items
  //'@padding-xs': '8px', // small items
  //'@padding-xss': '4px', // more small

  // -------- Vertical margins --------
  //'@margin-lg': '24px', // containers
  //'@margin-md': '16px', // small containers and buttons
  //'@margin-sm': '12px', // Form controls and items
  //'@margin-xs': '8px', // small items
  //'@margin-xss': '4px', // more small

  // -------- Typography --------
  // '@typography-title-font-weight': 600,
  // '@typography-title-margin-top': '1.2em',
  // '@typography-title-margin-bottom': '0.5em',
};

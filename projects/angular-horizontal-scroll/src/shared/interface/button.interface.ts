/**
 * @description
 * Represents the button styles for the Horizontal scroll component.
 *
 * @see {@link ButtonStylesDefault} for the default style values.
 */

export interface ButtonStyles {
  /**
   * The background color of the button.
   */
  btnBgColor: string;

  /**
   * The color of the arrow within the button.
   */
  arrowColor: string;

  /**
   * The scale factor of the button.
   */
  btnSize: number;
  /**
   * The inline styles of the button
   */
  inlineStyle: string;
}

export const ButtonStylesDefault: ButtonStyles = {
  btnBgColor: '#0000004d',
  arrowColor: '#fff',
  btnSize: 16,
  inlineStyle: '',
};

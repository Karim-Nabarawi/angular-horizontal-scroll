/**
 * @description
 * Represents the button styles for the Horizontal scroll component.
 *
 * @see {@link IScrollBtnStylesDefault} for the default style values.
 */

export interface IScrollBtnStyles {
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
}

export const IScrollBtnStylesDefault: IScrollBtnStyles = {
  btnBgColor: '#0000004d',
  arrowColor: '#fff',
  btnSize: 16,
};

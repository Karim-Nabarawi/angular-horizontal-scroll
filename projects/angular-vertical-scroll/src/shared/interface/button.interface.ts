/**
 * @description
 * Represents the button styles for the vertical scroll component.
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
  btnScale: number;
}

export const IScrollBtnStylesDefault: IScrollBtnStyles = {
  btnBgColor: 'rgba(0, 0, 0, 0.3)',
  arrowColor: 'rgb(255, 255, 255)',
  btnScale: 1,
};

import { IScrollBtnStyles, IscrollBtnDefault } from './button.interface';
/**
 * @description
 * Represents the main styles for the vertical scroll component.
 * Extends the {@link IScrollBtnStyles} type to inherit button styles.
 *
 * @see {@link IMainStylesDefault} for the default style values.
 * @see {@link IScrollBtnStyles} for button style properties.
 */
export interface IMainStyles extends IScrollBtnStyles {
  /**
   * The gap between elements within the component.
   */
  elementsGap: number;
  /**
   * The left margin of the first element in the component.
   */
  firstElementLeftMargin: number;
}

export const IMainStylesDefault: IMainStyles = {
  ...IscrollBtnDefault,
  elementsGap: 16,
  firstElementLeftMargin: 16,
};

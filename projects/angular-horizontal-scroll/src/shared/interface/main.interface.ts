import { IScrollBtnStyles, IScrollBtnStylesDefault } from './button.interface';
/**
 * @description
 * Represents the main styles for the horizontal scroll component.
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
   * The gap between the first  and last element and container.
   */
  firstAndLastElementGap: number;
  /**
   * The gap between header and container.
   */
  containerGap: number;
}

export const IMainStylesDefault: IMainStyles = {
  ...IScrollBtnStylesDefault,
  elementsGap: 16,
  firstAndLastElementGap: 16,
  containerGap: 0,
};

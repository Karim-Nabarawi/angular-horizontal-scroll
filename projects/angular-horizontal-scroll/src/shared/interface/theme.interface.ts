/**
 * @description
 * Represents the styles for the horizontal scroll container.
 *
 * @see {@link ScrollThemeDefault} for the default style values.
 */
export interface ScrollTheme {
  container: ContainerTheme;
  button: ButtonTheme;
}

export interface ContainerTheme {
  /**
   * The gap between elements within the component.
   */
  elementsGap?: number;
  /**
   * The gap between the first  and last element and container.
   */
  firstAndLastElementGap?: number;
  /**
   * The gap between header and container.
   */
  containerGap?: number;

  /**
   * The direction in which the items will be displayed
   */
  reverseDirection?: boolean;

  /**
   * The inline styles of the Container
   */
  inlineStyle?: string;
}

export interface ButtonTheme {
  /**
   * The background color of the button.
   */
  btnBgColor?: string;

  /**
   * The color of the arrow within the button.
   */
  arrowColor?: string;

  /**
   * The scale factor of the button.
   */
  btnSize?: number;
  /**
   * The inline styles of the button
   */
  inlineStyle?: string;
}

export const ScrollThemeDefault: ScrollTheme = {
  container: {
    elementsGap: 16,
    firstAndLastElementGap: 16,
    containerGap: 0,
    reverseDirection: false,
    inlineStyle: '',
  },
  button: {
    btnBgColor: '#0000004d',
    arrowColor: '#fff',
    btnSize: 16,
    inlineStyle: '',
  },
};

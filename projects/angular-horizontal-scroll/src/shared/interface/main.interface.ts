import { ButtonStyles, ButtonStylesDefault } from './button.interface';
/**
 * @description
 * Represents the main styles for the horizontal scroll container.
 *
 * @see {@link ContainerStylesDefault} for the default style values.
 */
export interface ContainerStyles {
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

  /**
   * The inline styles of the Container
   */
  inlineStyle: string;
}

export const ContainerStylesDefault: ContainerStyles = {
  elementsGap: 16,
  firstAndLastElementGap: 16,
  containerGap: 0,
  inlineStyle: '',
};

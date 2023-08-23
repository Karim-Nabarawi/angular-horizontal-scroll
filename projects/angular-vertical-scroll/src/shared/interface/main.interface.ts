import { IScrollBtnStyles, IscrollBtnDefault } from './button.interface';

export interface IMainStyles extends IScrollBtnStyles {
  elementsGap: number;
  firstElementLeftMargin: number;
}

export const IMainStylesDefault: IMainStyles = {
  ...IscrollBtnDefault,
  elementsGap: 16,
  firstElementLeftMargin: 16,
};

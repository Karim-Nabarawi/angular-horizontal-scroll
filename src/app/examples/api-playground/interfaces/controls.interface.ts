export interface ControlProps {
  mainControls: MainControls;
  containerControls: ContainerControls;
  buttonsControls: ButtonsControls;
}

export interface MainControls {
  scrollButtonPosition: 'center' | 'top right';
  scrollAmount: number | 'auto' | 'full';
  showScrollbar: boolean;
  reverseDirection: boolean;
}

export interface ContainerControls {
  containerGap: number;
  elementsGap: number;
  firstAndLastElementGap: number;
  reverseDirection: boolean;
  containerInlineStyle: string;
}

export interface ButtonsControls {
  btnBgColor: string;
  arrowColor: string;
  btnSize: number;
  buttonInlineStyle: string;
}

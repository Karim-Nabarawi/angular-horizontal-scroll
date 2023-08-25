# Angular Image Scroller Component

This Angular component provides a scrolling gallery of images with navigation buttons.

# Demo

[Live Example](https://karim-nabarawi.github.io/angular-horizontal-scroll/)

## Getting Started

1. Clone the repository or copy the relevant files into your Angular project.
2. Install the necessary dependencies:

   ```bash
   npm install angular-horizontal-scroll
   ```

# Usage

1. Import the `AngularhorizontalScrollModule` or `AngularhorizontalScrollComponent` in your module or standalone component:

   **Module:**

   ```typescript
   import { AngularHorizontalScrollModule } from "angular-horizontal-scroll";
   ```

   **Standalone:**

   ```typescript
   import { AngularHorizontalScrollComponent } from "angular-horizontal-scroll";
   ```

2. Include your content within the `horizontal-scroll` tags:

   ```html
   <horizontal-scroll>
     <!-- Your content here -->
   </horizontal-scroll>
   ```

3. Customize the component's appearance by adjusting the `customStyles` API.

   ```typescript
   import { IMainStyles } from "angular-horizontal-scroll";
   ```

# API

## Component Parameters

| Property               | Type                            | Default  | Description                      |
| ---------------------- | ------------------------------- | -------- | -------------------------------- |
| `customStyles`         | [custom styles](#custom-styles) | -        | Style for component              |
| `headerTitleTemplate`  | string \| TemplateRef<void>     | ""       | The title for the container      |
| `scrollAmount`         | 'auto' \| 'full' \| number      | 'auto'   | Control the scroll amount.       |
| `scrollButtonPosition` | 'center' \| 'top right'         | 'center' | The placement of scrolls buttons |
| `scrollButtonTemplate` | TemplateRef<void> \| undefined  | -        | Custom scroll button             |
| `showScrollbar`        | boolean                         | false    | Option to show scrollbar         |

## Custom Styles

### Main Styles

| Property                 | Type   | Default | Description                                     |
| ------------------------ | ------ | ------- | ----------------------------------------------- |
| `elementsGap`            | number | 16      | Set the gap between elements                    |
| `firstAndLastElementGap` | number | 16      | set `margin-left` for the first element in `px` |

### Button Styles

| Property     | Type   | Default     | Description                            |
| ------------ | ------ | ----------- | -------------------------------------- |
| `arrowColor` | string | '#fff'      | Set the color of the arrow             |
| `btnBgColor` | string | '#0000004d' | Set the background color of the button |
| `btnSize`    | number | 1           | Set the scale of the button            |

# Contributing

Contributions are welcome! If you find any issues or would like to add new features, feel free to open a pull request.

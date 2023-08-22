# Angular Image Scroller Component

This Angular component provides a scrolling gallery of images with navigation buttons.

## Getting Started

1. Clone the repository or copy the relevant files into your Angular project.
2. Install the necessary dependencies:

   ```bash
   npm install angular-vertical-scroll
   ```

# Usage

1. Import the AngularVerticalScrollModule in your module or standalone component:

   ```typescript
   import { AngularVerticalScrollModule } from "angular-vertical-scroll";
   ```

2. Include your content within the `vertical-scroll` tags:

   ```html
   <vertical-scroll>
     <!-- Your content here -->
   </vertical-scroll>
   ```

3. Customize the component's behavior and appearance by adjusting the provided CSS and TypeScript files.

# API

## Component Parameters

| Property                 | Type                               | Default  | Description                          |
| ------------------------ | ---------------------------------- | -------- | ------------------------------------ |
| `scrollAmount`           | 'auto' \| 'full' \| number         | 'auto'   | Control the scroll amount.           |
| `headerTitleTemplate`    | string \| TemplateRef<void>        | ""       | The title for the container          |
| `marginLeftFirstElement` | number                             | 16       | The margin left to the first element |
| `scrollButtonPosition`   | 'center' \| 'top right'            | 'center' | The placement of scrolls buttons     |
| `showScrollbar`          | boolean                            | false    | Option to show scrollbar             |
| `scrollButtonTemplate`   | TemplateRef<void> \| undefined     | -        | Custom scroll button                 |
| `customStyles`           | [IScrollBtnStyles](#custom-styles) | -        | Style for component                  |

## Custom Styles

| Property     | Type   | Default              | Description                            |
| ------------ | ------ | -------------------- | -------------------------------------- |
| `btnBgColor` | string | 'rgba(0, 0, 0, 0.3)' | Set the background color of the button |
| `arrowColor` | string | 'rgb(255, 255, 255)' | Set the color of the arrow             |
| `btnScale`   | number | 1                    | Set the scale of the button            |

# Contributing

Contributions are welcome! If you find any issues or would like to add new features, feel free to open a pull request.

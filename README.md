# Angular Image Scroller Component

This Angular component provides a scrolling gallery of images with navigation buttons.

## Getting Started

1. Clone the repository or copy the relevant files into your Angular project.
2. Install the necessary dependencies:

   ```bash
   npm install
   ```

# Usage

1. Import the ImageScrollComponent in your module or standalone component:

   ```typescript
   import { ImageScrollComponent } from "./image-scroll/image-scroll.component";
   ```

2. Add the `ImageScrollComponent` to your template and include your content within the `app-image-scroll` tags:

   ```html
   <app-image-scroll>
     <!-- Your content here -->
   </app-image-scroll>
   ```

3. Customize the component's behavior and appearance by adjusting the provided CSS and TypeScript files.

# Component Features

You can customize the appearance and behavior of the image scroller by adjusting the provided CSS and TypeScript files:

- `image-scroll.component.scss`: Modify the styles for the scroller, buttons, and individual media elements.
- `image-scroll.component.ts`: Adjust the scroll behavior and other component logic.

# API

## Component Parameters

| Property                 | Type                            | Default  | Description                          |
| ------------------------ | ------------------------------- | -------- | ------------------------------------ |
| `customStyles`           | [custom styles](#custom-styles) | -        | Style for component                  |
| `headerTitleTemplate`    | string \| TemplateRef<void>     | ""       | The title for the container          |
| `scrollAmount`           | 'auto' \| 'full' \| number      | 'auto'   | Control the scroll amount.           |
| `marginLeftFirstElement` | number                          | 16       | The margin left to the first element |
| `scrollButtonPosition`   | 'center' \| 'top right'         | 'center' | The placement of scrolls buttons     |
| `showScrollbar`          | boolean                         | false    | Option to show scrollbar             |
| `scrollButtonTemplate`   | TemplateRef<void> \| undefined  | -        | Custom scroll button                 |

## Custom Styles

### Main Styles

| Property                 | Type   | Default | Description                                 |
| ------------------------ | ------ | ------- | ------------------------------------------- |
| `elementsGap`            | number | 16      | Set gap between elements                    |
| `firstElementLeftMargin` | number | 16      | set `margin-left` for first element in `px` |

### Button Styles

| Property     | Type   | Default              | Description                            |
| ------------ | ------ | -------------------- | -------------------------------------- |
| `arrowColor` | string | 'rgb(255, 255, 255)' | Set the color of the arrow             |
| `btnBgColor` | string | 'rgba(0, 0, 0, 0.3)' | Set the background color of the button |
| `btnScale`   | number | 1                    | Set the scale of the button            |

# Contributing

Contributions are welcome! If you find any issues or would like to add new features, feel free to open a pull request.

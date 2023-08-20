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

2. Add the `ImageScrollComponent` to your template and include your content within the `ng-content` tags:

   ```html
   <app-image-scroll>
     <div class="media-element">
       <!-- Your image content here -->
     </div>
     <!-- Add more media elements as needed -->
   </app-image-scroll>
   ```

3. Customize the component's behavior and appearance by adjusting the provided CSS and TypeScript files.

# Component Features

You can customize the appearance and behavior of the image scroller by adjusting the provided CSS and TypeScript files:

- `image-scroll.component.scss`: Modify the styles for the scroller, buttons, and individual media elements.
- `image-scroll.component.ts`: Adjust the scroll behavior and other component logic.

# Component Parameters

| Input Parameter        | Type                        | Default | Description                                                                                                 |
| ---------------------- | --------------------------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `scrollAmount`         | number                      | 0       | Control the scroll button scroll amount. Set to `0` for automatic calculation using the first element width |
| `headerTitleTemplate`  | string \| TemplateRef<void> | ''      | The title for the container                                                                                 |
| `scrollButtonPosition` | 'center' \| 'top right'     | 'center | The placement of scrolls buttons                                                                            |

# Contributing

Contributions are welcome! If you find any issues or would like to add new features, feel free to open a pull request.

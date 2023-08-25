# Angular Horizontal Scroller

Provide an angular componenet for a scrolling container horizontal.

# 🔗 Demo

[Live Example](https://karim-nabarawi.github.io/angular-horizontal-scroll/)

# 📦 Install

```bash
npm install angular-horizontal-scroll
```

# ⚙️ Usage

1. Import the `AngularHorizontalScrollModule` or `AngularHorizontalScrollComponent` in your module or standalone component:

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

# ✨ API

## ⌨️ Component Parameters

| Property               | Type                            | Default  | Description                                                  |
| ---------------------- | ------------------------------- | -------- | ------------------------------------------------------------ |
| `customStyles`         | [`IMainStyles`](#custom-styles) | -        | Style for component                                          |
| `headerTitleTemplate`  | string \| TemplateRef<void>     | ""       | The title for the container                                  |
| `onLeftBtnClick`       | ()=>void                        | ()=>{}   | Callback function triggered when the left button is clicked  |
| `onRightBtnClick`      | ()=>void                        | ()=>{}   | Callback function triggered when the rigth button is clicked |
| `onScroll`             | ()=>void                        | ()=>{}   | Callback function triggered on scroll                        |
| `scrollAmount`         | 'auto' \| 'full' \| number      | 'auto'   | Control the scroll amount.                                   |
| `scrollButtonPosition` | 'center' \| 'top right'         | 'center' | The placement of scrolls buttons                             |
| `scrollButtonTemplate` | TemplateRef<void> \| undefined  | -        | Custom scroll button                                         |
| `showScrollbar`        | boolean                         | false    | Option to show scrollbar                                     |

## 🎨 Custom Styles

### Main Styles

| Property                 | Type   | Default | Description                                                          |
| ------------------------ | ------ | ------- | -------------------------------------------------------------------- |
| `elementsGap`            | number | 16      | Set the gap between elements within the component in `px`            |
| `firstAndLastElementGap` | number | 16      | set the gap between the first and last element and container in `px` |
| `containerGap`           | number | 16      | Set the gap between header and container in `px`                     |

### Button Styles

| Property     | Type   | Default     | Description                            |
| ------------ | ------ | ----------- | -------------------------------------- |
| `arrowColor` | string | '#fff'      | Set the color of the arrow             |
| `btnBgColor` | string | '#0000004d' | Set the background color of the button |
| `btnSize`    | number | 16          | Set the size of the button in `px`     |

# 🤝 Contributing

Contributions are welcome! If you find any issues or would like to add new features, feel free to open a pull request.

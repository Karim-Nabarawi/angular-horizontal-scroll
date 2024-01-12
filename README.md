## 📜 Angular Horizontal Scroller

Provide an angular component for a scrolling container horizontal.

## 🔗 Demo

[Live Example](https://karim-nabarawi.github.io/angular-horizontal-scroll/)

## 📦 Install

```bash
npm install angular-horizontal-scroll
```

## ⚙️ Usage

1. Import the `AngularHorizontalScroll` in your module or standalone component:

   ```typescript
   import { AngularHorizontalScroll } from "angular-horizontal-scroll";
   ```

2. Include your content within the `horizontal-scroll` tags:

   ```html
   <horizontal-scroll>
     <!-- Your content here -->
   </horizontal-scroll>
   ```

3. Customize the component's appearance by adjusting the `ScrollTheme` API.

   ```typescript
   import { ScrollTheme } from "angular-horizontal-scroll";
   ```

## ✨ API

### ⌨️ Component Parameters

| Param                    | Type                           | Default  | Description                      |
| ------------------------ | ------------------------------ | -------- | -------------------------------- |
| `[theme]`                | [`ContainerStyles`](#Theme)    | -        | Styles for container             |
| `[headerTitleTemplate]`  | string \| TemplateRef<void>    | -        | The title for the container      |
| `(onLeftBtnClick)`       | EventEmitter<void>             | -        | Left button click callback       |
| `(onRightBtnClick)`      | EventEmitter<void>             | -        | Right button click callback      |
| `(onScroll)`             | EventEmitter<void>             | -        | Scroll callback                  |
| `[scrollAmount]`         | 'auto' \| 'full' \| number     | 'auto'   | Control the scroll amount.       |
| `[scrollButtonPosition]` | 'center' \| 'top right'        | 'center' | The placement of scrolls buttons |
| `[scrollButtonTemplate]` | TemplateRef<void> \| undefined | -        | Custom scroll button             |
| `[showScrollbar]`        | boolean                        | false    | Option to show scrollbar         |

## 🎨 Theme

### Theme.container

| Property                 | Type    | Default | Description                                                          |
| ------------------------ | ------- | ------- | -------------------------------------------------------------------- |
| `containerGap`           | number  | 0       | Set the gap between header and container in `px`                     |
| `elementsGap`            | number  | 16      | Set the gap between elements within the component in `px`            |
| `firstAndLastElementGap` | number  | 16      | Set the gap between the first and last element and container in `px` |
| `reverseDirection`       | boolean | false   | Reverse direction of elements displayed                              |
| `inlineStyle`            | string  | ""      | Set the inline styles for container                                  |

### Theme.button

| Property      | Type   | Default     | Description                            |
| ------------- | ------ | ----------- | -------------------------------------- |
| `arrowColor`  | string | '#fff'      | Set the color of the arrow             |
| `btnBgColor`  | string | '#0000004d' | Set the background color of the button |
| `btnSize`     | number | 16          | Set the size of the button in `px`     |
| `inlineStyle` | string | ""          | Set the inline styles for buttons      |

## 🤝 Contributing

Contributions are welcome! If you find any issues or would like to add new features, feel free to open a pull request.

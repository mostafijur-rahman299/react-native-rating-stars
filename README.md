# react-native-rating-stars

`react-native-rating-stars` is a versatile react native star review component with custom star sizes, star count, star spacing, and interactivity clickable.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
5. [Props](#props)

## Installation

```sh
npm install react-native-rating-stars --save
```

## Usages

#### For giving star

```js
   import RatingStart from 'react-native-rating-stars'

   <RatingStart
      numberOfStar={5}
      ratingState={3}
      color="#006994"
      size={20}
      isClickable={true}
   />
```

#### Display

```js
   import RatingStart from 'react-native-rating-stars'

   <RatingStart
      numberOfStar={5}
      ratingState={3}
      color="#006994"
      size={20}
   />
```

## Props

| Prop | Type | Description | Required | Default |
|---|---|---|---|---|
|**`numberOfStar`**| int | How many star do you want to show |No|5|
|**`ratingState`**|int| 3 |No|0|
|**`color`**| string |color of star like 'red' or color code or rgba etc |No|`#006994`|
|**`size`**|int|size of stars|No|`25`|
|**`isClickable`**|boolean|want to give star|No|`false`|

## Contributing

Pull Requests for new features and bugfixes are welcome! :)

## License

[MIT License](http://opensource.org/licenses/mit-license.html)

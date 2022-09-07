import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";

const RatingStar = ({
  ratingState = 3,
  numberOfStar = 5,
  color = "#006994",
  size = 26,
  isClickable = false,
}) => {
  const [defaultRatingState, setDefaultRatingState] = useState(ratingState);

  const changeRating = (keyNumber) => {
    if (isClickable) {
      setDefaultRatingState((prevS) => {
        if (prevS === keyNumber) {
          return keyNumber - 1;
        } else {
          return keyNumber;
        }
      });
    }
  };

  let ratingStars = [];
  for (let i = 1; i <= numberOfStar; i++) {
    ratingStars.push(
      <TouchableOpacity
        activeOpacity={0.7}
        key={i}
        onPress={() => changeRating(i)}
      >
        {i <= defaultRatingState ? (
          <Octicons name="star-fill" color={color} size={size} />
        ) : (
          <Octicons name="star" color={color} size={size} />
        )}
      </TouchableOpacity>
    );
  }
  return <View style={styles.container}>{ratingStars}</View>;
};

export default RatingStar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

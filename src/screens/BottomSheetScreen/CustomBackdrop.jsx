import React, { useMemo } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native";

const CustomBackdrop = ({ animatedIndex, style, onPress }) => {
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP
    ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [style, { backgroundColor: "#00000069" }, containerAnimatedStyle],
    [style, containerAnimatedStyle]
  );

  return (
    <Animated.View style={[containerStyle, { flex: 1 }]}>
      <TouchableOpacity onPress={onPress} style={{ flex: 1 }} />
    </Animated.View>
  );
};

export default CustomBackdrop;

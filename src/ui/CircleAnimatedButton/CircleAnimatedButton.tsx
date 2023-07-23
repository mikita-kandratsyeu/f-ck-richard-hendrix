import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { CIRCUM_REFERENCE } from '../../constants';

import { styles } from './styles';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type CircleAnimatedButtonProps = {
  delay: number;
  handlePress: () => void | Promise<void>;
};

const CircleAnimatedButton = ({ delay, handlePress }: CircleAnimatedButtonProps) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const strokeOffset = useSharedValue(CIRCUM_REFERENCE);
  const animatedCircleProps = useAnimatedProps(() => ({
    strokeDashoffset: withTiming(strokeOffset.value, { duration: delay }, () => {
      runOnJS(setIsDisabled)(false);
    }),
  }));

  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={async () => {
        setIsDisabled(true);
        strokeOffset.value = strokeOffset.value > 0 ? 0 : CIRCUM_REFERENCE;

        await handlePress();
      }}
      style={styles.root}
    >
      <Text style={styles.text}>F*ck</Text>
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <AnimatedCircle
          animatedProps={animatedCircleProps}
          cx="50"
          cy="50"
          r="45"
          stroke="#8bc34a"
          strokeWidth="5"
          fill="rgba(255,255,255,0.2)"
          strokeDasharray={`${CIRCUM_REFERENCE}`}
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default CircleAnimatedButton;

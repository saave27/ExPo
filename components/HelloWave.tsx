import { useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

export function HelloWave() {
  const rotationAnimation = useSharedValue(0);

  useEffect(() => {
    rotationAnimation.value = withRepeat(
      withSequence(withTiming(25, { duration: 1500 }), withTiming(0, { duration: 1500 })),
      4 // Run the animation 4 times
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Image 
        source={require('@/assets/images/foto.jpeg')} // Asegúrate de tener la imagen en esta ruta
        style={styles.image} 
        resizeMode="contain"
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,  // Ajusta el tamaño según necesites
    height: 100,
  },
});
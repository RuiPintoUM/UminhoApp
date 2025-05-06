import { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Magnetometer, Accelerometer } from 'expo-sensors';

// Props for the GyroscopeIcon component
interface GyroscopeIconProps {
  source: any; // The image source (e.g., tricornio.png)
}

// Custom hook to calculate compass heading with tilt compensation and smoothing
export const useCompassRotation = () => {
  const [rotation, setRotation] = useState(0);
  const [magnetometerData, setMagnetometerData] = useState({ x: 0, y: 0, z: 0 });
  const [accelerometerData, setAccelerometerData] = useState({ x: 0, y: 0, z: 0 });
  const [smoothedHeading, setSmoothedHeading] = useState(0);

  useEffect(() => {
    // Set update intervals for sensors (100ms for smooth updates)
    Magnetometer.setUpdateInterval(100);
    Accelerometer.setUpdateInterval(100);

    // Subscribe to sensor updates
    const magnetometerSubscription = Magnetometer.addListener(setMagnetometerData);
    const accelerometerSubscription = Accelerometer.addListener(setAccelerometerData);

    // Clean up subscriptions when the component unmounts
    return () => {
      magnetometerSubscription.remove();
      accelerometerSubscription.remove();
    };
  }, []);

  useEffect(() => {
    const { x: magX, y: magY, z: magZ } = magnetometerData;
    const { x: accX, y: accY, z: accZ } = accelerometerData;

    // Calculate pitch and roll from accelerometer data
    const pitch = Math.atan2(accY, Math.sqrt(accX * accX + accZ * accZ));
    const roll = Math.atan2(-accX, accZ);

    // Adjust magnetometer readings for tilt
    const x = magX * Math.cos(pitch) + magZ * Math.sin(pitch);
    const y = magX * Math.sin(roll) * Math.sin(pitch) + magY * Math.cos(roll) - magZ * Math.sin(roll) * Math.cos(pitch);

    // Calculate heading in degrees
    let heading = Math.atan2(y, x) * (180 / Math.PI);
    if (heading < 0) heading += 360;

    // Apply low-pass filter for smoothing (alpha = 0.1 for gentle smoothing)
    const alpha = 0.1;
    const newHeading = alpha * heading + (1 - alpha) * smoothedHeading;
    setSmoothedHeading(newHeading);
    setRotation(newHeading);
  }, [magnetometerData, accelerometerData]);

  return rotation;
};

// Component to display the rotating icon
export const GyroscopeIcon: React.FC<GyroscopeIconProps> = ({ source }) => {
  const rotation = useCompassRotation();

  return (
    <Image
      source={source}
      style={[
        styles.icon,
        { transform: [{ rotate: `${rotation}deg` }] },
      ]}
    />
  );
};

// Styles for the icon
const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
});
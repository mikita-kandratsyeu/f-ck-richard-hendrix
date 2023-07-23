import React, { useCallback } from 'react';
import { Alert, Linking, TouchableOpacity } from 'react-native';

type LinkButtonProps = {
  url: string;
  children: React.ReactNode;
};

const LinkButton = ({ url, children }: LinkButtonProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <TouchableOpacity onPress={handlePress}>{children}</TouchableOpacity>;
};

export default LinkButton;

import React, { useCallback, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Audio } from 'expo-av';
import { AUDIO_FILES, GITHUB_REPO_LINK } from '../../constants';
import { CircleAnimatedButton, LinkButton } from '../../ui';
import { GitHubSvg } from '../../svg';

import { styles } from './styles';
import { getSoundFile } from '../../utils';

const Main = () => {
  const [delay, setDelay] = useState(2000);
  const [currentAudioFileOrder, setCurrentAudioFileOrder] = useState(1);

  const handlePress = useCallback(async () => {
    const { sound: soundFileFirst } = await Audio.Sound.createAsync(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('../../../assets/1.wav'),
    );

    const { sound: soundFileSecond } = await Audio.Sound.createAsync(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('../../../assets/2.wav'),
    );

    setDelay(currentAudioFileOrder === 1 ? 4000 : 1000);
    setCurrentAudioFileOrder((prev) => (prev === 2 ? 1 : 2));

    await (currentAudioFileOrder === 1 ? soundFileFirst : soundFileSecond).playAsync();
  }, [currentAudioFileOrder]);

  return (
    <SafeAreaView style={styles.root}>
      <CircleAnimatedButton delay={delay} handlePress={handlePress} />
      <View style={styles.githubButtonWrapper}>
        <LinkButton url={GITHUB_REPO_LINK}>
          <View style={styles.githubButton}>
            <GitHubSvg width={140} height={90} />
          </View>
        </LinkButton>
      </View>
    </SafeAreaView>
  );
};

export default Main;

import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabthreeScreen() {
      return (<>
            <ParallaxScrollView
                  headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
                  headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
                  <ThemedView style={styles.titleContainer}>
                        <ThemedText type="title">Explore</ThemedText>
                  </ThemedView>
                  <ThemedText>This app includes example code to help you get started.</ThemedText>
                  <Collapsible title="File-based routing">
                        <ThemedText>
                              This app has two screens:{' '}
                              <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
                              <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
                        </ThemedText>
                        <ThemedText>
                              The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
                              sets up the tab navigator.
                        </ThemedText>
                        <ExternalLink href="https://docs.expo.dev/router/introduction">
                              <ThemedText type="link">Learn more</ThemedText>
                        </ExternalLink>
                  </Collapsible>

                  <Collapsible title="Images">
                        <ThemedText>
                              For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
                              <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
                              different screen densities
                        </ThemedText>
                        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
                        <ExternalLink href="https://reactnative.dev/docs/images">
                              <ThemedText type="link">Learn more</ThemedText>
                        </ExternalLink>
                  </Collapsible>

                  <Collapsible title="Light and dark mode components">
                        <ThemedText>
                              This template has light and dark mode support. The{' '}
                              <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                              what the user's current color scheme is, and so you can adjust UI colors accordingly.
                        </ThemedText>
                        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                              <ThemedText type="link">Learn more</ThemedText>
                        </ExternalLink>
                  </Collapsible>

                  <Collapsible title="Light and dark mode components">
                        <ThemedText>
                              This template has light and dark mode support. The{' '}
                              <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                              what the user's current color scheme is, and so you can adjust UI colors accordingly.
                        </ThemedText>
                        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                              <ThemedText type="link">Learn more</ThemedText>
                        </ExternalLink>
                  </Collapsible>

                  <Collapsible title="Light and dark mode components">
                        <ThemedText>
                              This template has light and dark mode support. The{' '}
                              <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                              what the user's current color scheme is, and so you can adjust UI colors accordingly.
                        </ThemedText>
                        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                              <ThemedText type="link">Learn more</ThemedText>
                        </ExternalLink>
                  </Collapsible>

                  <Collapsible title="Light and dark mode components">
                        <ThemedText>
                              This template has light and dark mode support. The{' '}
                              <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                              what the user's current color scheme is, and so you can adjust UI colors accordingly.
                        </ThemedText>
                        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                              <ThemedText type="link">Learn more</ThemedText>
                        </ExternalLink>
                  </Collapsible>

                  <Collapsible title="Light and dark mode components">
                        <ThemedText>
                              This template has light and dark mode support. The{' '}
                              <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                              what the user's current color scheme is, and so you can adjust UI colors accordingly.
                        </ThemedText>
                        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                              <ThemedText type="link">Learn more</ThemedText>
                        </ExternalLink>
                  </Collapsible>

                  <Collapsible title="Light and dark mode components">
                        <ThemedText>
                              This template has light and dark mode support. The{' '}
                              <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                              what the user's current color scheme is, and so you can adjust UI colors accordingly.
                        </ThemedText>
                        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                              <ThemedText type="link">Learn more</ThemedText>
                        </ExternalLink>
                  </Collapsible>

                  <Collapsible title="Light and dark mode components">
                        <ThemedText>
                              This template has light and dark mode support. The{' '}
                              <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                              what the user's current color scheme is, and so you can adjust UI colors accordingly.
                        </ThemedText>
                        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                              <ThemedText type="link">Learn more</ThemedText>
                        </ExternalLink>
                  </Collapsible>

                  <Collapsible title="Light and dark mode components">
                        <ThemedText>
                              This template has light and dark mode support. The{' '}
                              <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                              what the user's current color scheme is, and so you can adjust UI colors accordingly.
                        </ThemedText>
                        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                              <ThemedText type="link">Learn more</ThemedText>
                        </ExternalLink>
                  </Collapsible>

                  <Collapsible title="Light and dark mode components">
                        <ThemedText>
                              This template has light and dark mode support. The{' '}
                              <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                              what the user's current color scheme is, and so you can adjust UI colors accordingly.
                        </ThemedText>
                        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                              <ThemedText type="link">Learn more</ThemedText>
                        </ExternalLink>
                  </Collapsible>

                  <Collapsible title="Light and dark mode components">
                        <ThemedText>
                              This template has light and dark mode support. The{' '}
                              <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                              what the user's current color scheme is, and so you can adjust UI colors accordingly.
                        </ThemedText>
                        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                              <ThemedText type="link">Learn more</ThemedText>
                        </ExternalLink>
                  </Collapsible>

                  <Collapsible title="Light and dark mode components">
                        <ThemedText>
                              This template has light and dark mode support. The{' '}
                              <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                              what the user's current color scheme is, and so you can adjust UI colors accordingly.
                        </ThemedText>
                        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                              <ThemedText type="link">Learn more</ThemedText>
                        </ExternalLink>
                  </Collapsible>

                  <Collapsible title="Light and dark mode components">
                        <ThemedText>
                              This template has light and dark mode support. The{' '}
                              <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                              what the user's current color scheme is, and so you can adjust UI colors accordingly.
                        </ThemedText>
                        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                              <ThemedText type="link">Learn more</ThemedText>
                        </ExternalLink>
                  </Collapsible>

            </ParallaxScrollView>
            <>
                  <Collapsible title="Light and dark mode components">
                        <ThemedText>
                              This template has light and dark mode support. The{' '}
                              <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                              what the user's current color scheme is, and so you can adjust UI colors accordingly.
                        </ThemedText>
                        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                              <ThemedText type="link">Learn more</ThemedText>
                        </ExternalLink>

                  </Collapsible>
            </>
      </>
      );
}

const styles = StyleSheet.create({
      headerImage: {
            color: '#808080',
            bottom: -90,
            left: -35,
            position: 'absolute',
      },
      titleContainer: {
            flexDirection: 'row',
            gap: 8,
      },
});
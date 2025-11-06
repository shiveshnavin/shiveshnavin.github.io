import { getLocaleProvider } from "@/locales";
import { loadAsync } from "expo-font";
import { Link, Slot } from "expo-router";
import React, { useEffect } from "react";
import { Platform } from "react-native";
import { Caption, Colors, DarkColors, TextView, Theme, ThemeContext } from 'react-native-boxes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function RootLayout() {
  const colorScheme = 'dark'
  const defaultTheme = new Theme('about-me', colorScheme === 'dark' ? DarkColors : Colors)
  defaultTheme.i18n = getLocaleProvider();
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  useEffect(() => {
    const localeProvider = getLocaleProvider();
    setTheme((t) => {
      t.i18n = localeProvider;
      return t
    });
  }, []);

  useEffect(() => {
    if (Platform.OS === 'web') {
      document.body.style.margin = '0';
      document.body.style.padding = '0';
      document.documentElement.style.backgroundColor = theme.colors.accent;
    }
  }, []);

  loadAsync({
    'Regular': require('../assets/fonts/Regular.ttf'),
    'Bold': require('../assets/fonts/Bold.ttf'),
    'Styled': require('../assets/fonts/Styled.ttf'),
  })

  return (
    <GestureHandlerRootView >
      <Render theme={theme} />
    </GestureHandlerRootView>
  )
}


function Render({ theme }: { theme: Theme }) {

  return (
    <ThemeContext.Provider value={theme} >
      <Slot />

      <TextView
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          textAlign: 'center',
          backgroundColor: theme.colors.accent
        }}
      >
        <Caption style={{
          color: theme.colors.text,
        }}>{`${theme.i18n.t('common.footer_1')}`}&nbsp;
          <Link
            style={{ textDecorationLine: 'underline', marginStart: 1 }}
            href="https://www.npmjs.com/package/react-native-boxes">react-native-boxes</Link> <br />
          {`${theme.i18n.t('common.footer_2')}`}
        </Caption>
      </TextView>
    </ThemeContext.Provider>
  )
}
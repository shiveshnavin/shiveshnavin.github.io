import I18nProvider from "@/locales";
import { loadAsync } from "expo-font";
import { Slot } from "expo-router";
import React, { useEffect } from "react";
import { Platform } from "react-native";
import { Caption, Colors, DarkColors, TextView, Theme, ThemeContext } from 'react-native-boxes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function RootLayout() {
  const colorScheme = 'dark'
  const theme = new Theme('my-app', colorScheme === 'dark' ? DarkColors : Colors);
  theme.i18n = I18nProvider as any
  I18nProvider.defaultLocale = 'hi';

  useEffect(() => {
    if (Platform.OS === 'web') {
      document.body.style.margin = '0';
      document.body.style.padding = '0';
      document.documentElement.style.backgroundColor = theme.colors.background;
    }
  }, []);

  loadAsync({
    'Regular': require('../assets/fonts/Regular.ttf'),
    'Bold': require('../assets/fonts/Bold.ttf'),
    'Styled': require('../assets/fonts/Styled.ttf'),
  })

  return (
    <ThemeContext.Provider value={theme} >
      <GestureHandlerRootView >
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
          }}>Fun Fact : This web app is built with React Native!</Caption>
        </TextView>
        <Slot />
      </GestureHandlerRootView>
    </ThemeContext.Provider>
  )
}

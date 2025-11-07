import Footer from "@/components/Footer";
import { getLocaleProvider } from "@/locales";
import { loadAsync } from "expo-font";
import { Slot } from "expo-router";
import React, { useEffect } from "react";
import { Platform } from "react-native";
import { Colors, DarkColors, Theme, ThemeContext } from 'react-native-boxes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function RootLayout() {
  const colorScheme = 'dark'
  const defaultTheme = new Theme('portfolio', colorScheme === 'dark' ? DarkColors : Colors)
  defaultTheme.i18n = getLocaleProvider();
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);
  let locale = ''

  if (Platform.OS === 'web') {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('locale')?.trim();
    if (langParam) {
      locale = langParam;
    }
  }

  useEffect(() => {
    const localeProvider = getLocaleProvider();
    setTheme((t) => {
      t.i18n = localeProvider;
      return t
    });
  }, [locale]);

  useEffect(() => {
    if (Platform.OS === 'web') {
      document.body.style.margin = '0';
      document.body.style.padding = '0';
      document.documentElement.style.backgroundColor = theme.colors.accent;
    }
  }, []);

  // Inject Firebase (CDN) for Web only, no npm install
  useEffect(() => {
    if (Platform.OS !== 'web') return;
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBslrNeoyy_4j2LWxlNRI31ZU2OPJXNpco",
  authDomain: "shiveshnavin.firebaseapp.com",
  databaseURL: "https://shiveshnavin.firebaseio.com",
  projectId: "firebase-shiveshnavin",
  storageBucket: "firebase-shiveshnavin.appspot.com",
  messagingSenderId: "787939295021",
  appId: "1:787939295021:web:100ae73ae02e893e001da4",
  measurementId: "G-TG5FCQ3TXY"
};

const app = initializeApp(firebaseConfig);
try { getAnalytics(app); } catch (_) { /* analytics may be unsupported locally */ }
    `;
    document.head.appendChild(script);
    return () => {
      try { document.head.removeChild(script); } catch { }
    };
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
      <Footer />
    </ThemeContext.Provider>
  )
}
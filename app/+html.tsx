import { ScrollViewStyleReset } from 'expo-router/html';
import React, { type PropsWithChildren } from 'react';

// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <head>
                <title>Shivesh Navin</title>
                <meta name="description" content="This page is about my profile, experience, education and projects." />
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />


                {/*
          Disable body scrolling on web. This makes ScrollView components work closer to how they do on native.
          However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
        */}
                <ScrollViewStyleReset />

                {/* Add any additional <head> elements that you want globally available on web... */}
            </head>
            <body>{children}</body>
            <script
                type="module"
                dangerouslySetInnerHTML={{
                    __html: `
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
try { getAnalytics(app); } catch (_) { /* analytics may be unsupported in some envs */ }
            `.trim(),
                }}
            />
        </html>
    );
}

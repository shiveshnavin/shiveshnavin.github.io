import About from "@/components/About";
import React from "react";
import { ThemeContext, VPage } from "react-native-boxes";

export default function Home() {
    const theme = React.useContext(ThemeContext);
    return (
        <VPage style={{
            padding: theme.dimens.space.md,
        }}>
            <About />
        </VPage>
    )
}
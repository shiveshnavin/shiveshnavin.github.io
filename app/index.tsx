import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Toolbar from "@/components/Toolbar";
import WorkExperience from "@/components/WorkExperience";
import { SupportedLanguages } from "@/locales";
import { router } from "expo-router";
import React, { useContext } from "react";
import { useWindowDimensions } from "react-native";
import { BottomSheet, CardView, DividerView, HBox, KeyboardAvoidingScrollView, ThemeContext, TransparentButton, VBox, VPage } from "react-native-boxes";

export default function Home() {
    const theme = useContext(ThemeContext);
    const { width } = useWindowDimensions();
    const [showLocalSelect, setShowLocalSelect] = React.useState(false);
    const isDesktop = width > 768;

    const CardRow = ({ children }: { children: React.ReactNode[] }) => {
        if (isDesktop) {
            // Desktop: 2 cards per row
            const rows = [];
            for (let i = 0; i < children.length; i += 2) {
                rows.push(
                    <HBox key={i} style={{ justifyContent: 'space-between', marginBottom: theme.dimens.space.md }}>
                        <CardView style={{ flex: 1, marginRight: i + 1 < children.length ? theme.dimens.space.md : 0 }}>
                            {children[i]}
                        </CardView>
                        {i + 1 < children.length && (
                            <CardView style={{ flex: 1, marginLeft: theme.dimens.space.md }}>
                                {children[i + 1]}
                            </CardView>
                        )}
                    </HBox>
                );
            }
            return <>{rows}</>;
        } else {
            let rows = [];
            for (let i = 0; i < children.length; i++) {
                rows.push(
                    <CardView key={i}>
                        {children[i]}
                    </CardView>
                );
            }
            return <>{rows}</>;
        }
    };

    return (
        <VPage style={{
            padding: theme.dimens.space.md,
            backgroundColor: theme.colors.background,
        }}>
            <KeyboardAvoidingScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
            >
                <Toolbar setShowLocalSelect={setShowLocalSelect} />

                <About />
                <CardRow>
                    {[
                        <Contact key="contact" />,
                        <WorkExperience key="work" />,
                        <Education key="education" />,
                        <Projects key="projects" />,
                        <Skills key="skills" />
                    ]}
                </CardRow>
                <DividerView style={{ height: theme.dimens.space.xl, backgroundColor: theme.colors.transparent }} />

                <BottomSheet
                    title="toolbar.select_language"
                    visible={showLocalSelect}
                    onDismiss={() => setShowLocalSelect(false)}
                >
                    <VBox style={{ padding: theme.dimens.space.md }}>
                        {
                            SupportedLanguages.map(lang => (
                                <TransparentButton key={lang.code} onPress={() => {
                                    if (typeof window !== 'undefined') {
                                        window.location.href = `/?locale=${lang.code}`;
                                    } else {
                                        router.navigate(`/?locale=${lang.code}`);
                                    }
                                    setShowLocalSelect(false);
                                }}>{lang.label}</TransparentButton>
                            ))
                        }
                    </VBox>
                </BottomSheet >

            </KeyboardAvoidingScrollView>
        </VPage>
    );
}
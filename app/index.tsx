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
import { BottomSheet, CardView, DividerView, Expand, HBox, KeyboardAvoidingScrollView, ThemeContext, TransparentButton, VBox, VPage } from "react-native-boxes";

export default function Home() {
    const theme = useContext(ThemeContext);
    const { width } = useWindowDimensions();
    const [showLocalSelect, setShowLocalSelect] = React.useState(false);
    const isDesktop = width > 768;

    const CardRow = ({ children }: { children: React.ReactNode[] }) => {
        if (isDesktop) {
            // Desktop: 2 cards per row using flexbox with gap
            return (
                <VBox style={{ gap: theme.dimens.space.md }}>
                    {Array.from({ length: Math.ceil(children.length / 2) }, (_, rowIndex) => {
                        const startIndex = rowIndex * 2;
                        const leftChild = children[startIndex];
                        const rightChild = children[startIndex + 1];
                        const keyL = (leftChild as any)?.key;
                        const keyR = (rightChild as any)?.key;

                        return (
                            <HBox key={rowIndex} style={{ gap: theme.dimens.space.md }}>
                                <Expand
                                    title={`${keyL}.title`}
                                    initialExpand={true}
                                    leftPadding={theme.dimens.space.sm}
                                    style={{ flex: 1 }}
                                >
                                    <CardView>
                                        {leftChild}
                                    </CardView>
                                </Expand>
                                {rightChild && (
                                    <Expand
                                        title={`${keyR}.title`}
                                        initialExpand={true}
                                        leftPadding={theme.dimens.space.sm}
                                        style={{ flex: 1 }}
                                    >
                                        <CardView>
                                            {rightChild}
                                        </CardView>
                                    </Expand>
                                )}
                            </HBox>
                        );
                    })}
                </VBox>
            );
        } else {
            let rows = [];
            for (let i = 0; i < children.length; i++) {
                let key = (children[i] as any)?.key
                rows.push(
                    <Expand title={`${key}.title`} initialExpand={true} leftPadding={theme.dimens.space.sm} >
                        <CardView key={i}>
                            {children[i]}
                        </CardView>
                    </Expand>
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
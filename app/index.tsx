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
            const leftColumn = children.filter((_, index) => index % 2 === 0);
            const rightColumn = children.filter((_, index) => index % 2 === 1);

            return (
                <HBox style={{ gap: theme.dimens.space.md }}>
                    <VBox style={{ flex: 1, gap: theme.dimens.space.md }}>
                        {leftColumn.map((child, index) => {
                            const key = (child as any)?.key ?? `left-${index}`;
                            return (
                                <Expand
                                    key={key}
                                    title={`${key}.title`}
                                    initialExpand={true}
                                    leftPadding={theme.dimens.space.sm}
                                >
                                    <CardView>
                                        {child}
                                    </CardView>
                                </Expand>
                            );
                        })}
                    </VBox>
                    {rightColumn.length > 0 && (
                        <VBox style={{ flex: 1, gap: theme.dimens.space.md }}>
                            {rightColumn.map((child, index) => {
                                const key = (child as any)?.key ?? `right-${index}`;
                                return (
                                    <Expand
                                        key={key}
                                        title={`${key}.title`}
                                        initialExpand={true}
                                        leftPadding={theme.dimens.space.sm}
                                    >
                                        <CardView>
                                            {child}
                                        </CardView>
                                    </Expand>
                                );
                            })}
                        </VBox>
                    )}
                </HBox>
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
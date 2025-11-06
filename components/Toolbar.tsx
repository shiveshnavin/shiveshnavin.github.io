import { SupportedLanguages } from "@/locales";
import { router } from "expo-router";
import React, { useContext } from "react";
import { HBox, PressableView, TextView, ThemeContext, TransparentCenterToolbar } from "react-native-boxes";

export default function Toolbar({ setShowLocalSelect }: { setShowLocalSelect: (show: boolean) => void }) {
    const theme = useContext(ThemeContext);
    const currentLocale = (theme.i18n as any).locale as string;

    const ViewIn = (<HBox>
        <TextView>toolbar.view_in</TextView>
        <PressableView onPress={() => {
            setShowLocalSelect(true);
        }}>
            <TextView style={{
                fontFamily: theme.fonts.Bold,
                color: theme.colors.accent
            }}>
                {SupportedLanguages.find(l => l.code === currentLocale)?.label}
            </TextView>
        </PressableView>
    </HBox>)
    return (
        <>
            <TransparentCenterToolbar
                homeIcon={ViewIn as any}
                options={[
                    {
                        id: 'linkedin',
                        icon: "linkedin",
                        onClick: () => {
                            router.navigate("https://www.linkedin.com/in/shiveshnavin/")
                        }
                    },
                    {
                        id: 'github',
                        icon: "github",
                        onClick: () => {
                            router.navigate("https://github.com/shiveshnavin?tab=repositories")
                        }
                    },
                ]}
            />

        </>
    );
}
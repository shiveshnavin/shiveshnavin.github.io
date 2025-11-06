import React, { useContext } from "react";
import {
    Avatar,
    CardView,
    Center,
    TextView,
    ThemeContext,
    Title
} from "react-native-boxes";

export default function About() {
    const theme = useContext(ThemeContext);

    return (
        <CardView style={{
            backgroundColor: theme.colors.background,
            margin: 0,
            marginBottom: theme.dimens.space.lg,
            borderRadius: theme.dimens.space.md,
            padding: theme.dimens.space.xl
        }}>
            <Center style={{ marginBottom: theme.dimens.space.lg }}>
                <Avatar
                    style={{
                        width: theme.dimens.icon.xxl * 1.5,
                        height: theme.dimens.icon.xxl * 1.5,
                        borderWidth: 3,
                        borderColor: theme.colors.invert.text
                    }}
                    iconUrl="https://avatars.githubusercontent.com/u/16799797"
                />
                <Title style={{
                    fontFamily: theme.fonts.Styled,
                    fontSize: theme.dimens.font.xl * 1.2,
                    marginTop: theme.dimens.space.md,
                    textAlign: 'center',
                    color: theme.colors.invert.text
                }}>
                    home.name
                </Title>
                <TextView style={{
                    textAlign: 'center',
                    color: theme.colors.invert.text,
                    marginTop: theme.dimens.space.sm,
                    opacity: 0.9
                }}>
                    home.subtitle
                </TextView>
            </Center>

            <TextView style={{
                lineHeight: 24,
                marginBottom: theme.dimens.space.md,
                color: theme.colors.invert.text,
                textAlign: 'center'
            }}>
                about.description
            </TextView>

            <Center style={{
                padding: theme.dimens.space.md,
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: theme.dimens.space.md,
                borderLeftWidth: 4,
                borderLeftColor: theme.colors.accent
            }}>
                <TextView style={{
                    textAlign: 'center',
                    fontStyle: 'italic',
                    color: theme.colors.invert.text,
                    opacity: 0.9
                }}>
                    about.quote
                </TextView>
            </Center>
        </CardView>
    );
}

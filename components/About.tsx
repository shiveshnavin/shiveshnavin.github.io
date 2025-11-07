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
            borderRadius: theme.dimens.space.md
        }}>
            <Center style={{
                marginBottom: theme.dimens.space.lg,
                paddingLeft: theme.dimens.space.xl,
                paddingRight: theme.dimens.space.xl
            }}>
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
                }}>
                    home.name
                </Title>
                <TextView style={{
                    textAlign: 'center',
                    fontFamily: theme.fonts.Bold,
                    marginTop: theme.dimens.space.sm,
                    opacity: 0.9
                }}>
                    about.position
                </TextView>
                <TextView style={{
                    textAlign: 'center',
                    marginTop: theme.dimens.space.sm,
                    opacity: 0.9
                }}>
                    home.subtitle
                </TextView>
            </Center>

            <Center >
                <TextView style={{
                    maxWidth: 800,
                    marginBottom: theme.dimens.space.md,
                    marginLeft: 0,
                    marginRight: 0,
                    textAlign: 'center'
                }}>
                    about.description
                </TextView>
            </Center>
            <Center >
                <Center style={{
                    maxWidth: 800,
                    padding: theme.dimens.space.md,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: theme.dimens.space.md,
                    borderLeftWidth: 4,
                    borderLeftColor: theme.colors.accent
                }}>
                    <TextView style={{
                        textAlign: 'center',
                        fontStyle: 'italic',
                        opacity: 0.9
                    }}>
                        about.quote
                    </TextView>
                </Center>
            </Center>
        </CardView>
    );
}

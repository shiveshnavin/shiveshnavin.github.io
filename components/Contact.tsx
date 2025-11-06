import React, { useContext } from "react";
import { Linking, Platform } from "react-native";
import {
    Expand,
    HBox,
    Icon,
    TextView,
    ThemeContext,
    TransparentButton,
    VBox
} from "react-native-boxes";

export default function Contact() {
    const theme = useContext(ThemeContext);

    const openLink = (url: string) => {
        if (Platform.OS === 'web') {
            window.open(url, '_blank');
        } else {
            Linking.openURL(url);
        }
    };

    return (
        <Expand title="contact.title" initialExpand={true} leftPadding={theme.dimens.space.sm} >
            <VBox>
                <HBox style={{
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>
                    <TransparentButton
                        text="contact.email"
                        icon="envelope"
                        style={{
                            flex: 1,
                            margin: theme.dimens.space.xs,
                            color: theme.colors.success
                        }}
                        onPress={() => openLink('mailto:shiveshnavin@gmail.com')}
                    />
                    <TransparentButton
                        text="contact.resume"
                        icon="file-text"
                        style={{
                            flex: 1,
                            margin: theme.dimens.space.xs,
                            color: theme.colors.info
                        }}
                        onPress={() => openLink('https://drive.google.com/file/d/1hIwWJCh5khQQ3KoZGipvBa3CBgmciB6-/view')}
                    />
                </HBox>

                <HBox style={{
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    marginTop: theme.dimens.space.md
                }}>
                    <TransparentButton
                        text="contact.github"
                        icon="github"
                        style={{
                            flex: 1,
                            margin: theme.dimens.space.xs,
                            color: theme.colors.warning
                        }}
                        onPress={() => openLink('https://github.com/shiveshnavin')}
                    />
                    <TransparentButton
                        text="contact.linkedin"
                        icon="linkedin"
                        style={{
                            flex: 1,
                            margin: theme.dimens.space.xs,
                            color: theme.colors.accent
                        }}
                        onPress={() => openLink('https://www.linkedin.com/in/shiveshnavin')}
                    />
                </HBox>

                <HBox style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: theme.dimens.space.lg
                }}>
                    <Icon
                        name="map-marker"
                        color={theme.colors.critical}
                        style={{ marginRight: theme.dimens.space.sm }}
                    />
                    <TextView style={{
                        textAlign: 'center'
                    }}>
                        contact.location
                    </TextView>
                </HBox>
            </VBox>
        </Expand>
    );
}
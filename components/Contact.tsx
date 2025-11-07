import React, { useContext } from "react";
import { Linking, Platform } from "react-native";
import {
    Icon,
    InfoRow,
    ThemeContext,
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
        <VBox>
            <InfoRow
                icon={<Icon style={{ padding: theme.dimens.space.md }} name="envelope" />}
                title="contact.email"
                text="{{shiveshnavin@gmail.com}}"
                textStyle={{
                    color: theme.colors.accent
                }}
                onPress={() => openLink('mailto:shiveshnavin@gmail.com')}
            />
            <InfoRow
                icon={<Icon style={{ padding: theme.dimens.space.md }} name="file-text" />}
                title="contact.resume"
                text="contact.pdf"
                textStyle={{
                    color: theme.colors.accent
                }}
                onPress={() => openLink('https://drive.google.com/file/d/1hIwWJCh5khQQ3KoZGipvBa3CBgmciB6-/view')}
            />

            <InfoRow
                icon={<Icon style={{ padding: theme.dimens.space.md }} name="map-marker" />}
                title="contact.location_desc"
                text="contact.location"
            />
        </VBox>
    );
}
import React, { useContext } from "react";
import { Image, Linking, Platform } from "react-native";
import {
    Caption,
    CardView,
    HBox,
    Icon,
    Subtitle,
    TextView,
    ThemeContext,
    VBox
} from "react-native-boxes";

export default function Projects() {
    const theme = useContext(ThemeContext);

    const openLink = (url: string) => {
        if (Platform.OS === 'web') {
            window.open(url, '_blank');
        } else {
            Linking.openURL(url);
        }
    };

    const projects = [
        {
            title: 'projects.firestore_jdbc_driver.title',
            subtitle: 'projects.firestore_jdbc_driver.type',
            description: 'projects.firestore_jdbc_driver.description',
            image_url: "https://github.com/shiveshnavin/firestore-jdbc-driver/blob/master/poster.webp?raw=true",
            action: () => openLink('https://github.com/shiveshnavin/firestore-jdbc-driver')
        },
        {
            title: 'projects.multi_db_orm.title',
            subtitle: 'projects.multi_db_orm.type',
            description: 'projects.multi_db_orm.description',
            image_url: "https://github.com/user-attachments/assets/14363e1d-f09e-43e3-a2e1-653ff54fcb59",
            action: () => openLink('https://npmjs.org/package/multi-db-orm')
        },
        {
            title: 'projects.react_native_boxes.title',
            subtitle: 'projects.react_native_boxes.type',
            description: 'projects.react_native_boxes.description',
            image_url: "https://github.com/user-attachments/assets/9174e501-eb08-46ec-8a38-90e8ec8931c5",
            action: () => openLink('https://npmjs.org/package/react-native-boxes')
        },
        {
            title: 'projects.pipelane.title',
            subtitle: 'projects.pipelane.type',
            description: 'projects.pipelane.description',
            image_url: "https://github.com/shiveshnavin/pipelane-server/blob/master/poster.jpg?raw=true",
            action: () => openLink('https://github.com/shiveshnavin/pipelane-server')
        },
        {
            title: 'projects.tap_tap_tiles.title',
            subtitle: 'projects.tap_tap_tiles.type',
            description: 'projects.tap_tap_tiles.description',
            action: () => openLink('https://play.google.com/store/apps/details?id=in.hoptec.kotlin101')
        },
        {
            title: 'projects.iot_blockchain.title',
            subtitle: 'projects.iot_blockchain.type',
            description: 'projects.iot_blockchain.description',
            image_url: "https://raw.githubusercontent.com/shiveshnavin/iot_blockchain/master/screenshots/mesh.gif",
            action: () => openLink('https://github.com/shiveshnavin/iot_blockchain')
        },
        {
            title: 'projects.power_manager_iot.title',
            subtitle: 'projects.power_manager_iot.type',
            description: 'projects.power_manager_iot.description',
            image_url: "https://github.com/user-attachments/assets/5b9aacd1-9d62-4c58-a6c3-05449f8a01c9",
            action: () => openLink('https://github.com/shiveshnavin/power-manager-iot')
        },
    ];

    return (
        <VBox style={{ gap: theme.dimens.space.md, }}>
            {projects.map((project, index) => (
                <CardView key={index} style={{
                    margin: 0,
                    padding: 0,
                    overflow: 'hidden'
                }}>
                    {/* Poster */}
                    {project.image_url && (
                        <Image
                            source={{ uri: project.image_url }}
                            style={{
                                width: '100%',
                                height: 180,
                                borderTopLeftRadius: theme.dimens.space.md,
                                borderTopRightRadius: theme.dimens.space.md,
                                overflow: 'hidden'
                            }}
                        />
                    )}
                    {/* Body */}
                    <VBox style={{ padding: theme.dimens.space.md }}>
                        <Subtitle style={{
                            fontWeight: '600',
                            marginBottom: theme.dimens.space.xs
                        }}>{project.title}</Subtitle>
                        <Caption style={{
                            opacity: 0.8,
                            marginBottom: theme.dimens.space.sm
                        }}>{project.subtitle}</Caption>
                        <TextView style={{
                            lineHeight: 18,
                            opacity: 0.9
                        }}>{project.description}</TextView>
                        <HBox style={{
                            justifyContent: 'flex-end',
                            marginTop: theme.dimens.space.md
                        }}>
                            <Icon
                                name="external-link"
                                color={theme.colors.accent}
                                style={{ cursor: 'pointer' }}
                                onPress={project.action}
                            />
                        </HBox>
                    </VBox>
                </CardView>
            ))}
        </VBox>
    );
}
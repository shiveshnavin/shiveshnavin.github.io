import React, { useContext } from "react";
import { Image, Linking, Platform } from "react-native";
import {
    Caption,
    CardView,
    Expand,
    HBox,
    isDesktop,
    PressableView,
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
            title: 'projects.self_hosted_object_storage.title',
            subtitle: 'projects.self_hosted_object_storage.type',
            description: 'projects.self_hosted_object_storage.description',
            image_url: "https://github.com/user-attachments/assets/098a2299-322c-4c31-9f28-6109a9ab0660",
            action: () => openLink('https://github.com/shiveshnavin/self-hosted-object-storage')
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
        {
            title: 'projects.more.title',
            subtitle: 'projects.more.type',
            description: 'projects.more.description',
            image_url: "https://yt3.googleusercontent.com/ytc/AIdro_nxqRVENDdeUA7pmUNnD9tkQw1QwRQAbhT6GyBB2EfWdcac=s900-c-k-c0x00ffffff-no-rj",
            action: () => openLink('https://github.com/shiveshnavin?tab=repositories')
        }
    ];

    const Content = projects.map((project, index) => (
        <PressableView onPress={project.action}>
            <CardView key={index}
                style={{
                    margin: isDesktop() ? theme.dimens.space.md : 0,
                    padding: 0,
                    overflow: 'hidden'
                }}>
                {/* Poster */}
                {project.image_url && (
                    <Image
                        resizeMode="contain"
                        source={{ uri: project.image_url }}
                        style={{
                            backgroundColor: theme.colors.invert.forground,
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
                    <Subtitle>{project.title}</Subtitle>
                    <TextView>{project.subtitle}</TextView>
                    <Caption>{project.description}</Caption>
                </VBox>
            </CardView>
        </PressableView>
    ))

    return (
        <Expand title={`projects.title`}
            initialExpand={true}
            leftPadding={theme.dimens.space.sm} >
            {
                isDesktop() ? (<HBox style={{
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {Content}
                </HBox>) :
                    (
                        <VBox style={{ gap: theme.dimens.space.md, }}>
                            {Content}
                        </VBox>
                    )
            }
        </Expand>
    );
}
import React, { useContext } from "react";
import { Linking, Platform } from "react-native";
import {
    Icon,
    SimpleDatatlistViewItem,
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
            id: '1',
            title: 'projects.node_paytmpg',
            subtitle: 'projects.node_paytmpg_type',
            description: 'projects.node_paytmpg_desc',
            action: () => openLink('https://npmjs.org/package/node-paytmpg')
        },
        {
            id: '2',
            title: 'projects.multi_db_orm',
            subtitle: 'projects.multi_db_orm_type',
            description: 'projects.multi_db_orm_desc',
            action: () => openLink('https://npmjs.org/package/multi-db-orm')
        },
        {
            id: '3',
            title: 'projects.cuface',
            subtitle: 'projects.cuface_type',
            description: 'projects.cuface_desc',
            action: () => openLink('https://github.com/shiveshnavin/cuface')
        },
        {
            id: '4',
            title: 'projects.tap_tap_tiles',
            subtitle: 'projects.tap_tap_tiles_type',
            description: 'projects.tap_tap_tiles_desc',
            action: () => openLink('https://play.google.com/store/apps/details?id=in.hoptec.kotlin101')
        },
        {
            id: '5',
            title: 'projects.iot_blockchain',
            subtitle: 'projects.iot_blockchain_type',
            description: 'projects.iot_blockchain_desc',
            action: () => openLink('https://github.com/shiveshnavin/iot_blockchain')
        }
    ];

    return (
        <VBox>
            {projects.map((project) => (
                <SimpleDatatlistViewItem
                    key={project.id}
                    title={project.title}
                    subtitle={project.subtitle}
                    body={project.description}
                    icon="code"
                    onPress={project.action}
                    action={<Icon name="external-link" />}
                    style={{
                        marginBottom: theme.dimens.space.sm
                    }}
                />
            ))}
        </VBox>
    );
}
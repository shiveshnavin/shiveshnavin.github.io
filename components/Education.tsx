import React, { useContext } from "react";
import {
    Expand,
    SimpleDatalistView,
    ThemeContext
} from "react-native-boxes";

export default function Education() {
    const theme = useContext(ThemeContext);

    const education = [
        {
            id: '1',
            title: 'education.mtech',
            subtitle: 'education.mtech_duration',
            description: 'education.mtech_desc'
        },
        {
            id: '2',
            title: 'education.btech',
            subtitle: 'education.btech_duration',
            description: 'education.btech_desc'
        }
    ];

    return (
        <Expand title="education.title" initialExpand={true} leftPadding={theme.dimens.space.sm} >
            <SimpleDatalistView
                items={education}
                itemAdapter={(item) => ({
                    title: item.title,
                    subtitle: item.subtitle,
                    body: item.description,
                    icon: 'graduation-cap',
                    flexRatio: [1, 8, 1]
                })}
            />
        </Expand>
    );
}
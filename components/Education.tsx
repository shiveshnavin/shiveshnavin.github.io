import React from "react";
import { SimpleDatalistView } from "react-native-boxes";

export default function Education() {
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
    );
}